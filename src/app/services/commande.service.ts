import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commande} from "../models/commande";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  api=environment.Api+"commande"
  constructor(private http:HttpClient) { }
  creer(res:any):Observable<any>{
    return this.http.post<any>(this.api,res)
  }
  trouver():Observable<any>{
    return this.http.get<any>(this.api)
  }
  trouverUn(id:string):Observable<Commande>{
    return this.http.get<Commande>(`${this.api}/one/${id}`)
  }
  trouverUser(id:string):Observable<Commande>{
    return this.http.get<Commande>(`${this.api}/user/${id}`)
  }
  supprimer(id:string):Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`)
  }
  update(id:string,body:Commande):Observable<Commande>{
    return this.http.put<Commande>(`${this.api}/${id}`,body)
  }
}
