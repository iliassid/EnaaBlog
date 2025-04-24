import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../Model/article.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>("http://localhost:3000/article");
  }
  addArticle(body : Article){
    return this.http.post("http://localhost:3000/article",body)
}
  editArticle(body : Article){
    return this.http.put("http://localhost:3000/article"+ body.id,body)
  }
  deleteArticle(id:any){
    return this.http.delete(`http://localhost:3000/article/${id}`)
  }

}
