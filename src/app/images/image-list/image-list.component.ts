import { Component, OnInit } from "@angular/core";
import { ImageService } from "src/app/shared/image.service";

@Component({
  selector: "app-image-list",
  templateUrl: "./image-list.component.html"
})
export class ImageListComponent implements OnInit {
  imageList: any[];

  constructor(private service: ImageService) {}

  ngOnInit() {
    this.service.imageDetailedList.snapshotChanges().subscribe(list => {
      this.imageList = list.map(item => {
        return item.payload.val();
      });
    });
  }
}
