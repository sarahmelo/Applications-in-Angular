import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transfers.model';
import { TransferService } from '../transfer-service.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transfersEmitted!: any[];

  constructor(private service: TransferService) { }

  ngOnInit() {
    this.service.allTransfer().subscribe((transfers : Transferencia[]) => {
      console.table(transfers)
      this.transfersEmitted = transfers
    }
    )
  }

}
