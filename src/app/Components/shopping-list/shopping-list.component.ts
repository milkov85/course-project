import { Component } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})

export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Катофи', 5),
    new Ingredient('Пиле', 1)
  ];
}

