import { Component, OnInit, Input } from '@angular/core';
import { Iproperty } from '../iproperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() property :Iproperty;

  constructor() { }

  ngOnInit() {
  }

}
