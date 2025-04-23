import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  projects: any;
  totalProjects: any;

}
