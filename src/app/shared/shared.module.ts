import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginModalComponent } from './components/login-modal/login-modal.component';



@NgModule({
  declarations: [LoginModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    LoginModalComponent
  ]
})
export class SharedModule { }
