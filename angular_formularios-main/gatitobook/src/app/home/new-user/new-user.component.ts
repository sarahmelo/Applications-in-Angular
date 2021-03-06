import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { toLowerCase } from './lowercase.validator';
import { NewUser } from './new-user';
import { NewUserService } from './new-user.service';
import { UserExistService } from './user-exist.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private userExist: UserExistService) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      userName: ['', [toLowerCase, Validators.required, this.userExist.userAlreadyExists]
      ],
      password: ['']
    })
  }

  userRegister() {
    const newUser = this.newUserForm.getRawValue() as NewUser
    console.log(newUser)
  }
}
