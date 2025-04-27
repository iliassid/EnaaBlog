import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {CommonModule, JsonPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {Article} from '../../Model/article.model';
import {FormsModule} from '@angular/forms';
import {CommandModule} from '@angular/cli/src/command-builder/command-module';
import {NavbarComponent} from '../navbar/navbar.component';
import {Router} from '@angular/router';




@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NavbarComponent,

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
    Categorie : '',
    date:new Date()

  }
  constructor(private articleService : PostService,private router:Router) {
  }

  ngOnInit(): void {
    this.onAllData()

  }

  onAddArticle(){
      this.articleService.addArticle(this.article).subscribe(articleadd => {
        console.log(articleadd)
        if (articleadd) {
          this.router.navigateByUrl('/post-list')
          this.onAllData();
        }
      })
  }

  onAllData(){
    this.articleService.getData().subscribe(AllData=>{
      this.Article = AllData;
      console.log(AllData)

    })


  }


}
