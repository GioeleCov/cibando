import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Recipe } from '../../../models/recipes.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  @Input() recipe: Recipe | undefined;
  @Input() page: string = '';
  @Output() messaggio = new EventEmitter();
  private sanitizer = inject(DomSanitizer);

  inviaTitolo(titolo: string) {
    this.messaggio.emit(titolo);
  }

  getSanitizeHTML(descrizione: string): SafeHtml {
    const tagliaDescrizione = this.accorciaDescrizione(descrizione);
    // const sanificaDescrizione = this.sanitizer.bypassSecurityTrustHtml(tagliaDescrizione);
    return tagliaDescrizione
   }
  
   accorciaDescrizione(descrizione: string): string {
    const lunghezzaDescrizione = 200;
    if(descrizione.length <= lunghezzaDescrizione){
      return descrizione.slice(0, lunghezzaDescrizione);
    } else {
      const ultimaPosizioneSpazio = descrizione.lastIndexOf(' ', lunghezzaDescrizione);
      return descrizione.slice(0, ultimaPosizioneSpazio);
    }
   }  
}
