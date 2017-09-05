import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';
import { MdSnackBar } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  private newList :List;
  addPageProgressBar: boolean = true;
  addPageLoad: boolean = false;
  progress: number = 90;
  interval: any;
  meals = [
    {value: '0', viewValue: '0'},
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '3+'},
    ];

  constructor(private listServ: ListService, public snackBar: MdSnackBar) {}

  ngOnInit() {
    this.newList = {
        blog: '',
        category:'',
        description:'',
        date:'',
        sleep: '',
        fatigue:'',
        exercise:'',
        meal:'',
        _id:''

    };
    this.interval = setInterval(()=>{
          this.progress += 1;
          console.log(this.progress)
          if (this.progress == 100){
            this.addPageProgressBar = false;
            this.addPageLoad = true;
            clearInterval(this.interval)
            }
        },500);

  }
  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 20000,
    });
  }

  public onSubmit() {
    console.log(this.newList)
    this.listServ.addList(this.newList).subscribe(
      response=> {
        if(response.success== true)
            console.log(this.newList)
            this.addList.emit(this.newList);
        },
    );
  }
}
