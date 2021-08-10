import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Transferencia } from './models/transfers.model';
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transfersList: any[];

  constructor(private http: HttpClient) {
    this.transfersList = []
   }

   private url = 'http://localhost:3000/transferencias';

   allTransfer(): Observable<Transferencia[]> {
     return this.http.get<Transferencia[]>(this.url);
   }

  get transfers() {
    return this.transfersList
  }

  toAdd(transferEmitted: Transferencia): Observable<Transferencia> {
    this.dataEmitted(transferEmitted)
    return this.http.post<Transferencia>(this.url, transferEmitted)
  }

  private dataEmitted(transfer: any) {
    transfer.data = new Date()
  }
}
