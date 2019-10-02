import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DeleteComponent } from './delete/delete.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, AccountComponent, NotificationsComponent, DeleteComponent, SignUpComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginComponent,AccountComponent,NotificationsComponent,DeleteComponent,SignUpComponent]
})
export class UserModule { }
