import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user.role?.trim().toLowerCase() === 'admin') {
        return true; 
      }
    }

    this.router.navigateByUrl('/login');
    return false;
  }
}
