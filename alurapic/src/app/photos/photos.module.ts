import { NgModule } from "@angular/core";
import { CardModule } from "../shared/components/card/card.module";

import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoModule } from "./photo/photo.module";

@NgModule({
    imports: [
      PhotoFormModule,
      PhotoListModule,
      PhotoModule,
    ]
})
export class PhotosModule {}
