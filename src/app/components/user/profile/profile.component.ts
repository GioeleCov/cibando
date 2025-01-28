import { UserService } from './../../../services/user.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  private userService = inject(UserService);
  user: any;
  email: string;

  constructor() {
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      this.email = JSON.parse(localStorage.getItem('user')).email;
    }

    if(this.email) {
      this.onGetUserDetails();
    }
  }

  onGetUserDetails() {
    this.userService.getUserDetailByEmail(this.email).subscribe({
      next: (res) => {
        this.user = res;
        console.log("Utente trovato:", this.user);
      },
      error: (err) => console.error("Errore nel recupero dell'utente:", err)
    });
  }
}
