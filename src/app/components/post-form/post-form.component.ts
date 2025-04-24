import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {JsonPipe, NgForOf} from '@angular/common';
import {Article} from '../../Model/article.model';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe
  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent implements OnInit{
  Article : any = []
  article : Article={
    Titre : '',
    Image : '',
    Description : '',
    Categorie : ''

  }

  constructor(private articleService : PostService) {
  }

  ngOnInit(): void {
    this.onAllData();
  }
  onAddArticle(){
    this.articleService.addArticle(this.article).subscribe()
  }

  onAllData(){
    this.articleService.getData().subscribe(AllData=>{
      this.Article = AllData;
      console.log(AllData)
    })
  }

  onEditArticle() {

  }

  onDeleteArticle(articleId:any) {
    let confirmDelete = confirm('Wache nta Mt2kad ?')
    if (confirmDelete){
      console.log(confirmDelete)
      this.articleService.deleteArticle(articleId).subscribe(Dlete =>{
        this.onAllData();
        console.log(Dlete)

      },err => console.log(err))
    }else {
      console.log(confirmDelete)
    }
  }
}
