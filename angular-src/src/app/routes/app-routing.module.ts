import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AddListComponent } from '../add-list/add-list.component';
import {ViewListComponent} from '../view-list/view-list.component';
import {ChartComponent} from '../Chart/chart.component';
import {HomeComponent} from '../home/home.component';



const routes: Routes = [
{
  path:'home',
  component: HomeComponent

},
{
  path: 'viewlist',
  component: ViewListComponent

},
{
path: 'addlist',
component: AddListComponent
},
{
path:'',
redirectTo: '/home',
pathMatch: 'full'
},
{
path: 'chart',
component: ChartComponent

}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]



})

export class AppRoutingModule {

}
