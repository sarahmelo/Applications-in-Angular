import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";
@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

  constructor(
    private formControl: FormBuilder,
    private service: AuthService,
    private router: Router,
    private plaformDetectorService: PlatformDetectorService
    ) {}

  ngOnInit(): void {
    this.form = this.formControl.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const userName = this.form.get('userName').value
    const password = this.form.get('password').value

    this.service.authenticate(userName, password)
      .subscribe(() => this.router.navigate(['user', userName])
      , error => {
        alert('usuario invalido'),
        this.form.reset()
        this.plaformDetectorService.isPlatformBrowser &&
          this.userNameInput.nativeElement.focus()
      });

    console.log('logado com sucesso')
  }
}
