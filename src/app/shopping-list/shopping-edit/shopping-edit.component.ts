import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import {
//   Component,
//   ElementRef,
//   OnInit,
//   ViewChild,
//   EventEmitter,
//   Output,
// } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputNameRef: ElementRef | any;
  @ViewChild('inputAmount') inputAmountRef: ElementRef | any;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppinglistService: ShoppingListService) {}
  ngOnInit(): void {}
  onAddingData() {
    const nameInput = this.inputNameRef.nativeElement.value;
    const amountInput = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(nameInput, amountInput);
    // this.ingredientAdded.emit(newIngredient);
    this.shoppinglistService.addIngredient(newIngredient);
  }
}
