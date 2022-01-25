import { ThrowStmt } from '@angular/compiler';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs-compat/Subscription';
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
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription | any;
  editMode = false;
  editedItemIndex: number | any;
  editedItem: Ingredient | any;
  @ViewChild('f') slForm: NgForm | any;
  //@ViewChild('inputName') inputNameRef: ElementRef | any;
  //@ViewChild('inputAmount') inputAmountRef: ElementRef | any;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppinglistService: ShoppingListService) {}
  ngOnInit(): void {
    this.subscription = this.shoppinglistService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppinglistService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    // const nameInput = this.inputNameRef.nativeElement.value;
    // const amountInput = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    // this.ingredientAdded.emit(newIngredient);
    if (this.editMode) {
      this.shoppinglistService.UpdateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppinglistService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppinglistService.DeleteIngredients(this.editedItemIndex);
    this.slForm.reset();
    this.editMode = false;
  }
}
