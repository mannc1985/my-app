import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
	ingredients: Ingredient[] = [
		new Ingredient('apples', 5),
		new Ingredient('banana', 4),
		new Ingredient('orange', 2),
	];


	constructor() { }

	ngOnInit() {
	}

	onIngredientAdded(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
	}

}
