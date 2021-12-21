import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private igChangeSubject: Subscription | undefined;
  ingredients: Ingredient[] | any;

  // ingredients: Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Orange', 10),
  //   new Ingredient('Watermelon', 3),
  // ];
  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.igChangeSubject =
      this.shoppinglistService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  // OnBindingTheData(inguVal: Ingredient) {
  //   this.ingredients.push(inguVal);
  // }

  ngOnDestroy(): void {
    this.igChangeSubject?.unsubscribe();
  }
}
