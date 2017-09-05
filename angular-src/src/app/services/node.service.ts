import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {TreeNode} from 'primeng/primeng'


@Injectable()
export class NodeService {

    constructor(private http: Http) {}

    getFiles() {
        return this.http.get('../../assets/data/files.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data).then(data => { return data; });
    }
    getFileSystem(){
    return this.http.get('../../assets/data/files-tree-table.json')
                .toPromise()
                .then(res => <TreeNode[]> res.json().data);
    }
}
