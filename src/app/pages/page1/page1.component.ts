import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Tile {
	color: string;
	cols: number;
	rows: number;
	text: string;
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.sass']
})
export class Page1Component {
	tiles: Tile[] = [
		{text: 'One', cols: 3, rows: 1, color: 'lightblue'},
		{text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
		{text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
		{text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
	  ];
}
