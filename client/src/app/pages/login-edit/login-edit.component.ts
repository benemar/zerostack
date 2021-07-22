// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { LoginService } from '../../services/login.service';
// Import Models
import { Login } from '../../domain/zerostack_db/login';

// START - USED SERVICES
/**
* loginService.create
*	@description CRUD ACTION create
*
* loginService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* loginService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Login
 */
@Component({
    selector: 'app-login-edit',
    templateUrl: 'login-edit.component.html',
    styleUrls: ['login-edit.component.css']
})
export class LoginEditComponent implements OnInit {
    item: Login;
    
    model: Login;
    formValid: Boolean;

    constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Login();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.loginService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Login
     *
     * @param {boolean} formValid Form validity check
     * @param Login item Login to save
     */
    save(formValid: boolean, item: Login): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.loginService.update(item).subscribe(data => this.goBack());
            } else {
                this.loginService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



