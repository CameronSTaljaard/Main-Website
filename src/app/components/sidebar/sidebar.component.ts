import { typeofExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class HeaderComponent implements OnInit {

	public dashboardDropped = false;

	toggleVisibility(event : Object) {
		this.dashboardDropped = !this.dashboardDropped;
	}

	navigateToPage(event : Event){
		let elementId: string = (event.target as Element).id;
		let page = elementId.split('-');
		this.router.navigateByUrl(page[0]);
	}

  	constructor(private router: Router) {}

  	ngOnInit() {}
}
