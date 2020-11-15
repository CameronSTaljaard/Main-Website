import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';

const routes: Routes = [
	{ path: '', component: MainBodyComponent},
	{ path:  'page1', component:  Page1Component },
	{ path:  'page2', component:  Page2Component },
	{ path:  'page3', component:  Page3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
