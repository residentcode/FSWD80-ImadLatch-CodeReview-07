import { Component, OnInit } from '@angular/core';
import { TravelService } from '../shared/travel.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  travelArray = [];
  searchText = '';

  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.travelService.getTravels().subscribe(
      (list) => {
        this.travelArray = list.map((item) => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  filterCondition(travel) {
    return travel.city.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }
}
