import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'rajantha`s house',
      Type: 'House',
      Price: 1200,
    },
    {
      Id: 2,
      Name: 'rajantha`s house1',
      Type: 'House',
      Price: 1200,
    },

    {
      Id: 3,
      Name: 'rajantha`s house2',
      Type: 'House',
      Price: 1200,
    },
    {
      Id: 4,
      Name: 'rajantha`s house3',
      Type: 'House',
      Price: 1200,
    },
    {
      Id: 5,
      Name: 'rajantha`s house4',
      Type: 'House',
      Price: 1200,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
