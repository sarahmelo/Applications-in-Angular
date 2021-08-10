import { Component } from '@angular/core';
import { TransferService } from './transfer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: TransferService) {}

  title = 'bytebank';
  value!: number;
  destiny!: number;

  transfersEmitted: any[] = []

  messageEmitted!: string;

  showModalWithError($event:string) {
    this.messageEmitted = $event
    console.log($event)
  }
}


