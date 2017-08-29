/*add-list.component.ts*/

import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { List } from '../models/List';
import { ListService } from '../services/list.service';

import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
@Output() addList: EventEmitter<List> = new EventEmitter<List>();
  private newList :List;
  foods = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}
];
 progress: number = 70;




  constructor(private listServ: ListService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.newList = {
        title: '',
        category:'',
        description:'',
        date:'',
        options: '',
        check:'',
        slide:'',
        _id:''

    };
  setInterval(()=>{this.progress +=1

  },500);


  }
  openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
  });
}

  public onSubmit() {
    this.listServ.addList(this.newList).subscribe(
        response=> {
            if(response.success== true)
              this.addList.emit(this.newList);
        },
    );

    }
}
