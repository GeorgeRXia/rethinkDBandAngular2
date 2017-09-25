import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { List } from '../../models/List';
import { ListService } from '../../services/list.service';
import { MdSnackBar } from '@angular/material';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import {Message} from 'primeng/components/common/api';


@Component({
  selector: 'app-primeng-add-list',
  templateUrl: './primeng-add-list.component.html',
  styleUrls: ['./primeng-add-list.component.css']
})
export class PrimengAddListComponent implements OnInit {
  @Output() addList: EventEmitter<List> = new EventEmitter<List>();
  private newList :List;
  msgs: Message[] = [];
  meals = [
    {value: '0', label: '0'},
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '3+'},
    ];
  category = [
      {value: 'very', label: 'very'},
      {value: 'Medium', label: 'Medium'},
      {value: 'Low', label: 'Low'}
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

  }
  showViaService() {
      this.msgs.push({severity:'success', summary:'Success Message', detail:'New entry Added'});
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
