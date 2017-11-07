import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, OnInit} from '@angular/core';

export class ShoppingListService implements OnInit{
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }
  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(... ingredients);
  }
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  ngOnInit() {}
}
