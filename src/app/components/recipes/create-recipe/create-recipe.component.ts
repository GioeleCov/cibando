import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeService } from '../../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  standalone: false,
  
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.scss'
})
export class CreateRecipeComponent {

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    difficulty: new FormControl(''),
    published: new FormControl(false)
  });

  private recipeService = inject(RecipeService);
  private router = inject(Router);

  onSubmit() {
    this.recipeService.createRecipe(this.form.value).subscribe({
      next: (res) => {
        this.router.navigateByUrl('home')
      },
      error: (e) => console.error(e)
    });
  }
}
