import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('A Test Recipe 1', 'Recipe1 description', 'https://assets.epicurious.com/photos/582cc7aa971f420e380c22ca/1:1/w_116%2Ch_116%2Cc_limit/duchess-baked-potatoes-BA-111616.jpg'),
		new Recipe('A Test Recipe 2', 'Recipe2 description', 'https://assets.epicurious.com/photos/582cc7aa971f420e380c22ca/1:1/w_116%2Ch_116%2Cc_limit/duchess-baked-potatoes-BA-111616.jpg'),
		new Recipe('A Test Recipe 3', 'Recipe3 description', 'https://assets.epicurious.com/photos/582cc7aa971f420e380c22ca/1:1/w_116%2Ch_116%2Cc_limit/duchess-baked-potatoes-BA-111616.jpg'),
		new Recipe('A Test Recipe 4', 'Recipe4 description', 'https://assets.epicurious.com/photos/582cc7aa971f420e380c22ca/1:1/w_116%2Ch_116%2Cc_limit/duchess-baked-potatoes-BA-111616.jpg')

	];



	constructor() { }

	ngOnInit() {
	}

	onRecipeSelected(recipe: Recipe) {
		this.recipeWasSelected.emit(recipe);
	}

}
