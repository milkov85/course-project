import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { RecipeListComponent } from './Components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Components/recipes/recipe-list/recipe-item/recipe-item.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingListComponent,
        ShoppingListEditComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
