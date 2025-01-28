//import { CanActivateFn } from '@angular/router';

import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

//export const loggedInGuard: CanActivateFn = (route, state) => {
//  return true;
//};

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isLogged() ? true : inject(Router).navigateByUrl('/login');
};  
