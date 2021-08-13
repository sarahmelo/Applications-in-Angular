import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private http: HttpClient) { }

  registerNewUser(newuser: NewUser) {
    this.http.post('https:localhost:3000', newuser)
  }
}
