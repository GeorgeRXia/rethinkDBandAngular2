import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  progress: number = 70;
  active: boolean = false;
  wait: boolean = true;
  interval: any;
  constructor() { }

  ngOnInit() {
    this.interval = setInterval(()=>{
          this.progress += 1;
          console.log(this.progress)
          if (this.progress == 100){

            this.wait = false;
            this.active = true;
            clearInterval(this.interval)
            }
        },500);
  }

}
