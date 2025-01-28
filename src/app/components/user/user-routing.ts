import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { authGuard } from "../../logged-in.guard";
import { UserComponent } from "./user.component";

const routes: Routes = [
      {path: 'registrazione', component: RegistrationComponent},
      {path: 'login', component: LoginComponent},
      {path: 'profilo', component: ProfileComponent, canActivate: [authGuard]},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }