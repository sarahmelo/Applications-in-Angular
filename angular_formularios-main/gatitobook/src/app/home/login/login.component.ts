import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificationService } from 'src/app/autentification/autentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private authService: AutentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log('passou')
     this.authService.autentification(this.username, this.password)
      .subscribe(()=> {
        console.log('logado com sucesso')
        this.router.navigate(['animals'])
      },
        (error) => {
        console.log(error)
        alert('usuario ou senha invalido')
        }
      )
  }



}
