import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, SlicePipe} from '@angular/common';
import {PostService} from '../../services/post.service';
import {RouterLink} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    SlicePipe,
    RouterLink,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  Article : any[] = []
  selectCategories=''
  searchByTitle=''
  constructor(private articleService : PostService) {
  }

  ngOnInit(): void {
   this.onAllData()
  }
  onAllData(){
    this.articleService.getData().subscribe(AllData=>{
      this.Article = AllData;
      console.log(AllData)

    })
  }

}
