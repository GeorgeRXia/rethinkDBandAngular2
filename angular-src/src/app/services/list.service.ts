/*list.service.ts*/

import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { List } from '../models/List'

import 'rxjs/add/operator/map';

@Injectable()
export class ListService {
  private serverApi= 'http://localhost:3000';
  constructor(private http: Http) { }

/*
When trying to establish an observable connection, I am returned with undefined. i believer it is because I am returned with an object( .map(res => <List[]>res.lists);)
public getAllLists():Observable<List[]> {

    let URI = `${this.serverApi}/goallist/`;
    return this.http.get(URI)
    .map(res => res.json())
    .map(res => <List[]>res.lists);
  }
  */

  public getAllLists(){

    let URI = `${this.serverApi}/goallist/`;
    return this.http.get(URI)
    .map(res => res.json());

  }

    public deleteList(listId : string) {
      let URI = `${this.serverApi}/goallist/${listId}`;
        let headers = new Headers;
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, {headers})
        .map(res => res.json());
    }
    public addList(list: List) {
        let URI = `${this.serverApi}/goallist/`;
        let headers = new Headers;
         let body = JSON.stringify({blog: list.blog, description: list.description, category: list.category, date: list.date, sleep: list.sleep, fatigue: list.fatigue, exercise: list.exercise, meal: list.meal});
         console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body ,{headers: headers})
        .map(res => res.json());
    }
}
