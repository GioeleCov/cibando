import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  standalone: false,

  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      oggetto: new FormControl('', [Validators.required]),
      messaggio: new FormControl('', [Validators.required])
    });

  onSubmit() {
    console.log(this.form.value);
    const dati = {nome: this.form.controls.nome.value, email: this.form.controls.email.value, oggetto: this.form.controls.oggetto.value, messaggio: this.form.controls.messaggio.value}
  }
}
