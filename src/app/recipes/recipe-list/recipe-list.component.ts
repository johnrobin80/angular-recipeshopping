import { Component, OnInit } from '@angular/core';
// import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] | any;
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'A test recipe',
  //     'This is just for testing',
  //     'https://cto-food.com/swfiles/files/shutterstock_203111092.jpg?nc=1620636472'
  //   ),
  //   new Recipe(
  //     'A test recipe2',
  //     'This is just for testing2',
  //     'https://cto-food.com/swfiles/files/shutterstock_203111092.jpg?nc=1620636472'
  //   ),
  //   new Recipe(
  //     'A test recipe3',
  //     'This is just for testing3',
  //     'https://cto-food.com/swfiles/files/shutterstock_203111092.jpg?nc=1620636472'
  //   ),
  // ];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
