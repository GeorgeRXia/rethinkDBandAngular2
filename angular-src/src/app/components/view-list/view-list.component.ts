/*view-list.component.ts*/

import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../models/List'

import { TreeNode, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  private items: any[];
  display: boolean = false;
  lists: List[] = [];
  list2: any[] = [];
  draggedList: List;
  finishLoad: boolean = false;
  spinner: boolean = true;
  interval: any;
  progress: number = 99;


  constructor(private listServ: ListService) { }

  ngOnInit() {
    this.loadLists();
    this.showDialog();
    this.items = [{
    label: 'Routes',
    items: [

        {label: 'Charts', icon: '', url: 'http://localhost:4200/#/chart'}
    ]
    }];
    this.interval = setInterval(()=>{
          this.progress += 1;
          console.log(this.progress)
          if (this.progress == 100){

            this.spinner = false;
            this.finishLoad = true;
            clearInterval(this.interval)
            }
        },500);
  }

  showDialog() {
        this.display = true;
    }

  loadLists() {
    this.listServ.getAllLists().subscribe(response => this.lists = response.data);

  }


  // deleteList(list: List) {
  //   this.listServ.deleteList(list._id).subscribe(
  //     response => this.lists = this.lists.filter(lists => lists !== list),)
  //
  //   }
  onAddList(newList) {
    this.lists = this.lists.concat(newList);

  }
  dragStart(event,list: List) {
      this.draggedList = list;
  }

  drop(event) {
      if(this.draggedList) {
          let draggedListIndex = this.findIndex(this.draggedList);
          this.list2 = [...this.list2, this.draggedList];
          this.lists = this.lists.filter((val,i) => i!=draggedListIndex);
          this.draggedList = null;
      }
  }

  dragEnd(event) {
      this.draggedList = null;
  }

  findIndex(list: List) {
      let index = -1;
      for(let i = 0; i < this.lists.length; i++) {
          if(list.date === this.lists[i].date) {
              index = i;
              break;
          }
      }
      return index;
  }

}
