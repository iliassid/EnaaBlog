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
  Article : any = []

  constructor(private articleService : PostService) {
  }

  ngOnInit(): void {
    this.onAllData();
  }

  onAllData(){
    this.articleService.getData().subscribe(AllData=>{
      this.Article = AllData;
      console.log(AllData)
    })
  }

}
