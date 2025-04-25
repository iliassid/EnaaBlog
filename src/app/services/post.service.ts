import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>("http://localhost:3000/article");
  }
  addArticle(postData:any):Observable<any>{
    return this.http.post("http://localhost:3000/article",postData)
}
  editArticle(edittData : any):Observable<any>{
    return this.http.put("http://localhost:3000/article"+ edittData.id,edittData)
  }
  deleteArticle(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/article/${id}`)
  }

}
