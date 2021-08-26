import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DarkenOnHover } from "./darken-on-hover.directive";

@NgModule({
  declarations: [ DarkenOnHover ],
  exports: [ DarkenOnHover ]
})

export class DarkenOnHoverModule {}
