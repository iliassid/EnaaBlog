import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent implements OnInit{


  constructor(private articleService : PostService) {
  }

  ngOnInit(): void {

  }


}
