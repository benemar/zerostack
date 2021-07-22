import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginEditComponent } from './login-edit.component';

const routes: Routes = [
  {
    path: '',
    component: LoginEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginEditRoutingModule { }
