import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';
import{ first, map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserExistService {

  constructor(private newUserService: NewUserService) { }

  userAlreadyExists() {
    console.log('chamou')
    return (control: AbstractControl) => {
      console.log('alvarinho')
      return control.valueChanges.pipe(
        switchMap(async (username) => this.newUserService.verifyUserExistent(username))
      ),
      map((existent) => existent? { userExists : true } : null ),
      console.log('auau')
      first()
    }
  }
}
