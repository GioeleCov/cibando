import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  private router = inject(Router);
  private userService = inject(UserService);

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,15}$/)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl(false, [Validators.requiredTrue])
  })

  passwordConvalidata = false;

  image = "https://cdn.pixabay.com/photo/2022/08/31/10/18/hamburger-7422976_1280.jpg"

  onSubmit(){
    console.log(this.form.value)
    const dati = {nome: this.form.controls.name.value, email: this.form.controls.email.value}
    this.userService.saveUser(this.form.value).subscribe({
      next: (res) => {
        console.log("utente aggiunto ", res),
        this.router.navigateByUrl('home');
      },
      error: (e) => console.log(e)
    });

    this.userService.datiUtente.next(dati);
    //this.router.navigate(['home']) è ugaule a navigateByUrl; è praticamente un routerlink però fatto nella classe
    this.router.navigateByUrl('home');
  }

  controlloPassword(e){
    if(e === this.form.controls.password.value){
      this.passwordConvalidata = true;
    } else {
      this.passwordConvalidata = false;
    }
  }

  convalidaForm(): boolean{
    if(this.form.valid && this.passwordConvalidata){
      return false
    } else {
      return true
    }
  }
}
