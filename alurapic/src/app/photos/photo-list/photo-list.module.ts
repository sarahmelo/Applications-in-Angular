import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardModule } from "src/app/shared/components/card/card.module";
import { DarkenOnHoverModule } from "src/app/shared/directives/darken-on-hover/darken-on-hover.module";
import { PhotoModule } from "../photo/photo.module";
import { FilterByDescription } from "./filter-by-description.pipe";
import { LoadbuttonComponent } from "./loadbutton/loadbutton.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadbuttonComponent,
    FilterByDescription,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule
  ]
})

export class PhotoListModule {}
