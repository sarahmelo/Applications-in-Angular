import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-message',
  templateUrl: './vmessage.component.html'
})
export class VmessageComponent {

  @Input() message = ''
}
