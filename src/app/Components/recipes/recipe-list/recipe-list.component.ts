import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemToSelect = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Пиле с картофи', 'Много вкусно', 'https://www.supichka.com/files/images/1134/resize_536_2000.jpg'),
    new Recipe('Свинско с картофи', 'Още по-вкусно', 'https://www.supichka.com/files/images/1134/resize_536_2000.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  recipeItemSelect(recipeSelected) {
    this.recipeItemToSelect.emit(recipeSelected);
  }

}
