import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy1', 'Dummy1', 'https://thumb1.shutterstock.com/display_pic_with_logo/3612503/408291268/stock-vector-tailor-dummy-fashion-icon-on-white-background-atelier-object-simple-and-minimalistic-couture-408291268.jpg', []),
    new Recipe('Dummy2', 'Dummy2', 'https://thumb1.shutterstock.com/display_pic_with_logo/3612503/408291268/stock-vector-tailor-dummy-fashion-icon-on-white-background-atelier-object-simple-and-minimalistic-couture-408291268.jpg', []),
    new Recipe('Dummy3', 'Dummy3', 'https://thumb1.shutterstock.com/display_pic_with_logo/3612503/408291268/stock-vector-tailor-dummy-fashion-icon-on-white-background-atelier-object-simple-and-minimalistic-couture-408291268.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
