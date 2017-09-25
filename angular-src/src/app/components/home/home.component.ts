import { Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {MaterialDialogComponent} from '../material-dialog/material-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title = "Goal Tracker"
frontPageProgressBar: boolean = true;
frontPageLoad: boolean = false;
progress: number = 90;
interval: any;

ngOnInit() {
this.interval = setInterval(()=>{
      this.progress += 1;
      console.log(this.progress)
      if (this.progress == 100){

        this.frontPageProgressBar = false;
        this.frontPageLoad = true;
        this.openDialog();
        clearInterval(this.interval)
        }
    },500);



}
constructor(public dialog: MdDialog) {}

openDialog() {
  const dialogRef = this.dialog.open(MaterialDialogComponent, {
    height: '350px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
