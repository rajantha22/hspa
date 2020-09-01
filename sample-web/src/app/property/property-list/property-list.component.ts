import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';
import { Iproperty } from '../iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<Iproperty>;
  constructor(private HousingService: HousingService) {}

  ngOnInit() {
    this.HousingService.getAllProperties().subscribe((data) => {
      this.properties = data;
    },
    error => {console.log(error)}
    );

    // this.http.get('data/properties.json').subscribe((data) => {
    //   this.properties = data;
    // });
  }
}
