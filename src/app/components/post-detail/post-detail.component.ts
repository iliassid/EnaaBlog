import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})

export class PostDetailComponent implements OnInit{
  constructor(private  srviceArticle:PostService,private  route:ActivatedRoute) {
  }
  postId:string|null=null;
  post:any;
  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    if (this.postId){
      this.srviceArticle.PostDataById(this.postId).subscribe((data)=>{
        this.post = data
      })
    }
  }


}

