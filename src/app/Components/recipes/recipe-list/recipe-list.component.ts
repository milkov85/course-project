import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Пиле с картофи','Много вкусно','https://www.supichka.com/files/images/1134/resize_536_2000.jpg'),
    new Recipe('Пиле с картофи','Много вкусно','https://www.supichka.com/files/images/1134/resize_536_2000.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
