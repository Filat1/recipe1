import {Recipe} from '../recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'desc: A super-tasty Schnitzel - just awesome!',
      'http://www.pizza-piccolo.at/shop/media/images/popup/fleisch_wienerschnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'desc: What else you need to say?',
      'http://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/THMB-QUAD%20Stacker_0.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {return this.recipes.slice(); }
}
