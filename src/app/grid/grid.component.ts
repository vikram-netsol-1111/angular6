import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  Innovators = [
          { name: 'superman' , power: 90 } ,
          { name: 'batman' , power: 78 } ,
          { name: 'ironman' , power: 88 }
        ];
  res = {status:'200'};
  name: string;
  height = 6;
  getColor() {
    return 'green';
  }
  _getColor() {
      switch(this.res.status) {
      case '200':
      return 'green';
      case '400':
      return 'red';
      case '404':
      return 'orange';
      }
  }
  constructor() {
      this.name = 'vikram';
  }

  ngOnInit() {
  }

}
