import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Iproperty } from '../property/iproperty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(sellRent: number): Observable<Iproperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<Iproperty> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === sellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
