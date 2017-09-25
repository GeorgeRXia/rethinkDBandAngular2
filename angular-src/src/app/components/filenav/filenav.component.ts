import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../services/node.service';
import { TreeNode, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-filenav',
  templateUrl: './filenav.component.html',
  styleUrls: ['./filenav.component.css']
})
export class FilenavComponent implements OnInit {
  files: TreeNode[];
  treeTableFiles: TreeNode[];

  constructor(private nodeService: NodeService) {
   }

  ngOnInit() {
    this.loadDataTree();
    this.loadDataTreeTable();
  }
  loadDataTree(){
    this.nodeService.getFiles().then(files => this.files = files);

  }
  loadDataTreeTable(){
    this.nodeService.getFileSystem().then(files => this.treeTableFiles = files);

  }
}
