import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AddListComponent } from '../add-list/add-list.component';
import {ViewListComponent} from '../view-list/view-list.component';
import {ChartComponent} from '../chart/chart.component';
import {HomeComponent} from '../home/home.component';
import {AppComponent} from '../app.component';



export const addListState = { name: 'addlist', url: '/addlist',  component: AddListComponent };

export const viewListState = { name: 'viewlist', url: '/viewlist',  component: ViewListComponent };
export const chartState = {name: 'chart', url: '/chart',  component: ChartComponent};
export const homeState = {name: 'home', url: '',  component: HomeComponent};
