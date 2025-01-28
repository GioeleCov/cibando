import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  email = '';
  password = '';
  user;
  errorMessage = '';

  onSubmit(form) {
    if (form.email !== '' && form.password !== '') {
      this.authService.login(form.email, form.password).subscribe({
        next: (res) => {
          this.user = res;

          if (res) {
            localStorage.setItem('user', JSON.stringify(res));
            this.router.navigateByUrl('/home');
          } else {
            this.errorMessage = 'Username/password errati';
          }
        },
        error: (e) => {
          this.errorMessage = 'Username/password errati';
          console.log(e);
        }
      });
    }
  }
}
