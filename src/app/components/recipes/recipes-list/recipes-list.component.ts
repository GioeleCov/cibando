import { Component, inject } from '@angular/core';
import { Recipe } from '../../../models/recipes.model';
import { RecipeService } from '../../../services/recipe.service';
import { map, Observable, take } from 'rxjs';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}


@Component({
  selector: 'app-recipes-list',
  standalone: false,

  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
  recipeService = inject(RecipeService); 
   ricette: Recipe[] = [];
   titoloRicevuto: any;

    first: number = 0;
    rows: number = 10;
    page = 1;
    size = 4;

    recipes$ = this.recipeService.getRecipes().pipe(
      map(response => response.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 3)),
      map(res => this.totaleRicetter = res)
    )
    totaleRicetter: Recipe[];


    constructor() {
      //this.getRecipes();
    }

    getRecipes() {
      this.recipeService.getRecipes().pipe(take(1)).subscribe({
        next: (res) => {
          this.ricette = res;
        },
        error: (err) => console.error(err)
      })
    }

    riceviTitolo(event: any) {
      this.titoloRicevuto = event;
    }

    onPageChange(event) {
      event.page = event.page + 1;
      this.page = event.page;
      this.size = event.rows;
  }
}
