import { AdminGuard } from './../../admin.guard';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from './recipes.component';
import { DetailComponent } from './detail/detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

const routes: Routes = [
    {path: '', component: RecipesComponent, children: [
        {path: 'dettaglio/:title/:_id', component: DetailComponent},
        {path: '', component: RecipesListComponent, pathMatch: 'full'}
    ]},   
    {path: 'create-recipe', component: CreateRecipeComponent, canActivate: [AdminGuard]}, 
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule { }