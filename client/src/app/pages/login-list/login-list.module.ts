import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginListComponent } from './login-list.component';
import { LoginListRoutingModule } from './login-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LoginListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LoginListComponent
  ]
})
export class LoginListModule { }
