import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { TokenService } from "../token/token.service";
import * as jwt_decoce from 'jwt-decode';
import { User } from "./user.interface";

@Injectable({ providedIn: 'root'})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken()
      && this.decodeAndNotify()
  }

  setToken(token: string) {
    this.tokenService.setToken(token)
    this.decodeAndNotify()
  }

  getUser() {
    return this.userSubject.asObservable()
   }

  private decodeAndNotify() {
    const token = this.tokenService.getToken()
    const user = jwt_decoce(token) as User
    this.userSubject.next(user)
  }

  logOut() {
    this.tokenService.removeToken();
    this.userSubject.next(null)
  }

  isLogged() {
    return this.tokenService.hasToken()
  }

  getUserName() {
    return this.userName;
  }
}
