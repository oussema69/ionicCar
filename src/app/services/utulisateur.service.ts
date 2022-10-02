import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utulisateur} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UtulisateurService {

  api=environment.Api+"utulisateur"
  constructor(private http:HttpClient) { }
  creer(res:any):Observable<any>{
    return this.http.post<any>(this.api,res)
  }
  trouver():Observable<any>{
    return this.http.get<any>(this.api)
  }
  trouverUn(id:string):Observable<Utulisateur>{
    return this.http.get<Utulisateur>(`${this.api}/one/${id}`)
  }
  supprimer(id:string):Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`)
  }
  update(id:string,body:Utulisateur):Observable<Utulisateur>{
    return this.http.put<Utulisateur>(`${this.api}/${id}`,body)
  }
}
