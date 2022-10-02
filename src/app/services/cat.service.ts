import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cat} from "../models/cat";

@Injectable({
  providedIn: 'root'
})
export class CatService {



  api=environment.Api+"cat"
  constructor(private http:HttpClient) { }
  creer(res:any):Observable<any>{
    return this.http.post<any>(this.api,res)
  }
  trouver():Observable<any>{
    return this.http.get<any>(this.api)
  }
  trouverUn(id:string):Observable<Cat>{
    return this.http.get<Cat>(`${this.api}/one/${id}`)
  }
  supprimer(id:string):Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`)
  }
  update(id:string,body:Cat):Observable<Cat>{
    return this.http.put<Cat>(`${this.api}/${id}`,body)
  }
}
