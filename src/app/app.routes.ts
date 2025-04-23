import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"post-detail",component:PostDetailComponent},
    {path:"post-list",component:PostListComponent},
    {path:"post-form",component:PostFormComponent},




];
