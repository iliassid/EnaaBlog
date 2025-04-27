import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DatePipe, NgForOf, NgIf, SlicePipe} from '@angular/common';
import {PostService} from '../../services/post.service';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    RouterLink,
    DatePipe,
    NgForOf,
    NgIf,
    FormsModule,
    SlicePipe,
    NavbarComponent
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
  onDeleteArticle(articleId:number) {
    let confirmDelete = confirm('Voulez-vous le supprimer Article?')
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
  onEditArticle() {
    let conformeedit = confirm("Wax mt2kad baghi  dire modification ?")
    if (conformeedit){
      this.articleService.editArticle(this.Article).subscribe(articleedit=>{
        console.log(articleedit)
      })
    }
  }

}
