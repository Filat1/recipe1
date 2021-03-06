import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }
  onNewClick(){
    this.router.navigate(['new'],{relativeTo: this.activatedRoute});
    console.log('this.router: ',this.router);
  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    console.log('this.recipes ', this.recipes);
  }
}
