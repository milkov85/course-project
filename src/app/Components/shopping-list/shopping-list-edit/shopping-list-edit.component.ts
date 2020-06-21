import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addIngredient() {
    this.newIngredient.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }
}
