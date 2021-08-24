import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoModule } from "../photo/photo.module";
import { FilterByDescription } from "./filter-by-description.pipe";
import { LoadbuttonComponent } from "./loadbutton/loadbutton.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";

@NgModule({
  declarations: [ PhotoListComponent, PhotosComponent, LoadbuttonComponent, FilterByDescription ],
  imports: [ CommonModule, PhotoModule ]
})

export class PhotoListModule {}
