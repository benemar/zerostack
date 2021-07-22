import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginEditComponent } from './login-edit.component';
import { LoginEditRoutingModule } from './login-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LoginEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LoginEditComponent
  ]
})
export class LoginEditModule { }
