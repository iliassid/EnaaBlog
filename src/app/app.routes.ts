import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
//import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
   {path:"home",component:HomeComponent,canActivate :  [AuthGuard]},
    {path:"post-detail/:id",loadComponent : () => import('./components/post-detail/post-detail.component').then(E =>E.PostDetailComponent),canActivate :  [AuthGuard]},
    {path:"post-list",component:PostListComponent,canActivate :  [AuthGuard]},
    {path:"post-form",component:PostFormComponent,canActivate :  [AuthGuard]},

];
