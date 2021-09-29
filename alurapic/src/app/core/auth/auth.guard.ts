import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/core/user/user.service";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router) {}

canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        if(this.userService.isLogged()){
            console.log('guarda de rota ativado')
            this.router.navigate(['user'])
            return false;
        }
        return true;
}


}
