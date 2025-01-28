import { Component, ViewChild, ElementRef, AfterViewInit, signal } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { UserService } from '../../services/user.service';
import { Recipe } from '../../models/recipes.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('modaleRegistrazione', {static: false}) modale: ElementRef;

  isLoaded = signal(false);

  evidenziato = false;
  ricette: Recipe[] = [];
  datiRegistrazione = {};
  idModal = '';
  nomeModale = '';

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private modalService: NgbModal
  ) {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res.sort((a,b) => b._id - a._id).slice(0,4);
      },
      error: (err) => console.error(err)
    });

    /*this.userService.datiUtente.subscribe(res => {
      console.log(res);
      localStorage.setItem('datiReg', JSON.stringify(res))
      //this.datiRegistrazione = res;
      //this.openModal(this.modale);
    });*/

  }

  /*ngAfterViewInit(): void {
    if(localStorage.getItem('datiReg')) {
      this.datiRegistrazione = JSON.parse(localStorage.getItem('datiReg'));
      localStorage.removeItem('datiReg');
      this.openModal(this.modale);
    }
  }*/

    ngAfterViewInit(): void {
      this.userService.datiUtente.subscribe(res => {
        console.log(res);
        localStorage.setItem('datiReg', JSON.stringify(res))
        this.datiRegistrazione = res;
        if(res !== null) {
          this.openModal(this.modale);
        }
      });
    }

  onEvidenziazione() {
    this.evidenziato = !this.evidenziato;
  }

  openModal(content: any, id?: string, nome?: string, cognome?: string) {
    this.idModal = id;
    this.nomeModale = nome;
    this.modalService.open(content, {centered: true, ariaLabelledBy: 'modale di benvenuto', size: 'lg'}).result
    .then(
      (res) => {
        console.log('azione da eseguire ' + res);
        this.userService.datiUtente.next(null);
      }
    )
    .catch((error) => console.log('nessuna azione da eseguire'))
  }

  toggle() {
    this.isLoaded.update(val => !val);
  }
}
