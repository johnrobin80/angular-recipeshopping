import { Component, Input, OnInit } from '@angular/core';
//import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe | any;

  //@Output() recipeSelected = new EventEmitter<void>();

  // constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  //   ///this.recipeSelected.emit();
  //   // alert('On selected');
  // }
}
