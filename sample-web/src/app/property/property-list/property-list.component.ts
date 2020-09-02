import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';
import { Iproperty } from '../iproperty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  sellRent =1;
  properties: Array<Iproperty>;
  constructor(private route:ActivatedRoute,private HousingService: HousingService) {}

  ngOnInit() {

    if(this.route.snapshot.url.toString()){
      this.sellRent=2;
    }
    this.HousingService.getAllProperties(this.sellRent).subscribe((data) => {
      this.properties = data;
      console.log(data);
    },
    error => {console.log(error)}
    );
  }
}
