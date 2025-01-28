import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from "./user-routing";
import { HttpClientModule } from "@angular/common/http";


@NgModule ({
    declarations: [
        RegistrationComponent,
        LoginComponent,
        ProfileComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordModule,
        DividerModule,
        InputTextModule,
        FloatLabelModule,
        RadioButtonModule,
        ButtonModule,
        UserRoutingModule,
        HttpClientModule
    ],
    exports: []
})

export class UserModule { }