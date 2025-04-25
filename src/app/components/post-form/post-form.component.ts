import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {CommonModule, JsonPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Article} from '../../Model/article.model';
import {FormsModule} from '@angular/forms';
import {CommandModule} from '@angular/cli/src/command-builder/command-module';




@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    NgOptimizedImage,
    CommonModule,

  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent implements OnInit{
  Article : any[] = []
  article ={
    Titre : '',
    Image : '',
    Description : '',
    Categorie : ''

  }
 onClose :any;
  constructor(private articleService : PostService) {
  }

  ngOnInit(): void {
    this.onAllData()
  }

  onAddArticle(){
      this.articleService.addArticle(this.article).subscribe(articleadd => {
        console.log(articleadd)
        if (articleadd) {
          this.onAllData();
        }
      })
  }


  onEditArticle() {
    let conformeedit = confirm("Wax mt2kad baghi  dire modification ?")
    if (conformeedit){
      this.articleService.editArticle(this.article).subscribe(articleedit=>{
        console.log(articleedit)
        this.onClose(articleedit)
      })
    }
  }

  onAllData(){
    this.articleService.getData().subscribe(AllData=>{
      this.Article = AllData;
      console.log(AllData)

    })
  }



  onDeleteArticle(articleId:number) {
    let confirmDelete = confirm('Wache nta Mt2kad ?')
    if (confirmDelete){
      console.log(confirmDelete)
      this.articleService.deleteArticle(articleId).subscribe(Delete =>{
        if (Delete){
          this.onAllData();
        }
        console.log(Delete)

      },err => console.log(err))
    }else {
      console.log(confirmDelete)
    }
  }
}
