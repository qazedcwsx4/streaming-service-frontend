import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FlexModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule { }
