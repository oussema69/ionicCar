import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../models/art";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  api=environment.Api+"article"
  constructor(private http:HttpClient) { }
  creer(res:any):Observable<any>{
    return this.http.post<any>(this.api,res)
  }
  trouver():Observable<any>{
    return this.http.get<any>(this.api)
  }
  trouverUn(id:string):Observable<Article>{
    return this.http.get<Article>(`${this.api}/one/${id}`)
  }
  trouverUnCat(nom:string):Observable<Article>{
    return this.http.get<Article>(`${this.api}/oneCat/${nom}`)
  }
  supprimer(id:string):Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`)
  }
  update(id:string,body:Article):Observable<Article>{
    return this.http.put<Article>(`${this.api}/${id}`,body)
  }
}
