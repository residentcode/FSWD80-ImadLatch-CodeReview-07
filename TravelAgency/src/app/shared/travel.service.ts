import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  form = new FormGroup({
    $key: new FormControl(null),
    city: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });

  constructor(private firebase: AngularFireDatabase) { }
  travelList: AngularFireList<any>;

  getTravels() {
    this.travelList = this.firebase.list('travels');
    return this.travelList.snapshotChanges();
  }

  insertTravel(travel) {
    this.travelList.push({
      city: travel.city,
      name: travel.name,
      description: travel.description,
      image: travel.image
    });
  }

  populateForm(travel) {
    this.form.setValue(travel);
  }
  updateTravel(travel) {
    this.travelList.update(travel.$key, {
      city: travel.city,
      name: travel.name,
      description: travel.description,
      image: travel.image
    });
  }
  deleteTravel($key: string) {
    this.travelList.remove($key);
  }

}
