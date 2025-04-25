import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {PostService} from '../../services/post.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit{
  Article : any[] = []
  selectCategories=''
  searchByTitle=''

  constructor(private articleService : PostService) {
  }
ngOnInit() {
  this.onAllData()

}



  onAllData(){
    this.articleService.getData().subscribe(AllData=>{
      this.Article = AllData;
      console.log(AllData)

    })
  }

}
