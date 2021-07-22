import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { LoginService } from '../../services/login.service';
// Import Models
import { Login } from '../../domain/zerostack_db/login';

// START - USED SERVICES
/**
* loginService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* loginService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Login
 * @class LoginListComponent
 */
@Component({
    selector: 'app-login-list',
    templateUrl: './login-list.component.html',
    styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {
    list: Login[];
    search: any = {};
    idSelected: string;
    constructor(
        private loginService: LoginService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.loginService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Login to remove
     *
     * @param {string} id Id of the Login to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Login
     */
    deleteItem() {
        this.loginService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
