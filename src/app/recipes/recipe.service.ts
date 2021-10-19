import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Smokey Salmon',
      'Smokey salmon with steamed vegetables.',
      'https://lh3.google.com/u/0/d/1v47_krDTciIiDbnI1iPmf4chDqlvTDkF=w1919-h937-iv1',
      [new Ingredient('Cheese', 5), new Ingredient('Soya', 6)]
    ),
    new Recipe(
      'Grilled Chicken',
      'Tender cheicken breast grilled with flavoured leafs and ginger-garlic paste.',
      'https://lh3.google.com/u/0/d/1c7HyGodwDLju5-1_cCo6C9CgVkgRbOop=w1920-h937-iv1',
      [new Ingredient('Paprika', 7), new Ingredient('Yogurt', 8)]
    ),
    new Recipe(
      'Chicken Cheese Roast',
      'Chicken roasted with cheese dressing.',
      'https://lh3.google.com/u/0/d/14o8UOUPjPMJR9hJQSpNctWUmTXyfw0dM=w1285-h937-iv1',
      [new Ingredient('Saffron', 9), new Ingredient('Cardamom', 10)]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsToShoppingList(ingredients);
  }
}
