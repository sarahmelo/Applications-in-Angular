import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/auth/auth.guard";
import { SignupComponent } from "src/app/home/singup/signup.component";
import { NotFoundComponent } from "./erros/not-found/not-found.component";
import { SigninComponent } from "./home/singin/signin.component";

import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { PhotoListResolve } from "./photos/photo-list/photolist.resolver";

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolve
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
