import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipesComponent } from './recipes.component';
import { RecipeCardComponent } from '../shared/recipe-card/recipe-card.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { PaginatorModule } from 'primeng/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from "./recipes-routing";


@NgModule({
    declarations: [
        RecipeCardComponent,
        RecipesComponent,
        RecipesListComponent,
        CreateRecipeComponent,
        DetailComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        NgbModule,
        NgbCollapse,
        InputTextModule,
        FloatLabelModule,
        RadioButtonModule,
        ButtonModule,
        EditorModule,
        PaginatorModule,
        FormsModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ],
    exports: [RecipeCardComponent] //i componenti che sono condivisi
})

export class RecipesModule { }