import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  imageDetailedList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {}

  getImageDetailsList() {
    this.imageDetailedList = this.firebase.list("imageDetails");
  }

  insertImageDetails(imageDetails) {
    this.imageDetailedList.push(imageDetails);
  }
}
