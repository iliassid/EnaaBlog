import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient,private route:Router) { }
  private url="http://localhost:3000/article"

  getData():Observable<any>{
    return this.http.get<any>(this.url);
  }
  addArticle(postData:any):Observable<any>{
    return this.http.post(this.url,postData);

  }
  PostDataById(id:string):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }
  editArticle(edittData : any):Observable<any>{
    return this.http.put("http://localhost:3000/article/"+ edittData.id,edittData)
  }
  deleteArticle(id:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/article/${id}`)
  }


}
