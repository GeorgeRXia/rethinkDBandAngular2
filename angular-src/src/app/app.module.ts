import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UIRouterModule} from "@uirouter/angular";

import { AddListComponent } from './add-list/add-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ChartComponent } from './chart/chart.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';

import { ListService } from './services/list.service';
import { NodeService } from './services/node.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material-primeng/material.module';
import { MyOwnCustomPrimengModule } from './material-primeng/primeng.module';


import 'hammerjs';

import { addListState, viewListState, chartState, homeState } from './states/states';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { PrimengAddListComponent } from './primeng-add-list/primeng-add-list.component';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';

let INITIAL_STATES = [addListState, viewListState, chartState, homeState];

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ViewListComponent,
    ChartComponent,
    HomeComponent,
    BannerComponent,
    SnackBarComponent,
    PrimengAddListComponent,
    MaterialDialogComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    MyOwnCustomPrimengModule,
    UIRouterModule.forRoot({ states: INITIAL_STATES, useHash: true })
  ],
  entryComponents:[
  MaterialDialogComponent
  ],
  providers: [ListService, NodeService],
  bootstrap: [AppComponent, SnackBarComponent]
})
export class AppModule { }
