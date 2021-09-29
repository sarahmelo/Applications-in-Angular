import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SignupComponent } from "src/app/home/singup/signup.component";
import { TokenService } from "../core/token/token.service";
import { MessageModule } from "../shared/components/card/vmessage/vmessage.module";
import { SigninComponent } from "./singin/signin.component";

@NgModule({
  declarations: [ SigninComponent, SignupComponent ],
  imports: [ FormsModule, ReactiveFormsModule, CommonModule, MessageModule, RouterModule ]
})
export class HomeModule {}
