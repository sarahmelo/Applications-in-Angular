import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transferencia } from '../models/transfers.model';
import { TransferService } from '../transfer-service.service';



@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() transferValue = new EventEmitter<any>();

  constructor(
    private service: TransferService,
    private route: Router
  ) { }

  value!: number;
  destiny!: number;

  ngOnInit(): void {
  }

  transfer() {
    console.log('Solicitação de uma nova transferência');
    if (this.isValid()) {
      const dataTransfer: Transferencia = { valueEmitted: this.value, destinyEmitted: this.destiny }
      this.service.toAdd(dataTransfer)
        .subscribe(transfer => {
          console.log(transfer);
          this.clear();
          this.route.navigateByUrl('extrato')
        },
          (error) => console.log(error)
        )
    }
  }

  clear() {
    this.value = 0;
    this.destiny = 0;
  }

  // value with error
  @Output() valueError = new EventEmitter

  private isValid() {
    const valid = this.value > 0;
    if (!valid) {
      const dataMessage = 'Informe um valor válido'
      this.valueError.emit(dataMessage)
    };
    return valid;
  }
}
