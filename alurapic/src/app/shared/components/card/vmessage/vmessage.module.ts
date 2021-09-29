import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VmessageComponent } from "./vmessage.component";

@NgModule({
  declarations: [ VmessageComponent ],
  exports: [ VmessageComponent ]
})

export class MessageModule {}
