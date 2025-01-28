import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: string; 
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements DoCheck {
  isCollapsed = true;
  user: User;
  isAdmin = false; 

  constructor(
    private router: Router,
    public authService: AuthService,
  ) {}

  ngDoCheck(): void {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.user = JSON.parse(savedUser);

      this.isAdmin = this.user.role?.trim().toLowerCase() === 'admin';
    }
  }

  logout() {
    this.authService.logout();
    this.isAdmin = false;
    this.router.navigateByUrl('/login');
  }
}
