import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PanierService {


  api=environment.Api+"panier"
  constructor(private http:HttpClient) { }
  creer(res:any):Observable<any>{
    return this.http.post<any>(this.api,res)
  }
  trouver():Observable<any>{
    return this.http.get<any>(this.api)
  }
  trouverUn(id:string):Observable<any>{
    return this.http.get<any>(`${this.api}/one/${id}`)
  }
  trouveruser(id:string):Observable<any>{
    return this.http.get<any>(`${this.api}/user/${id}`)
  }
  supprimer(id:string):Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`)
  }
  pushproduit(idu:string,idp:string):Observable<any>{
    return this.http.put<any>(`${this.api}/${idu}/${idp}`,{})
  }
  deleteproduit(idu:string,idp:string):Observable<any>{
    return this.http.put<any>(`${this.api}/del/${idu}/${idp}`,{})
  }
  update(id:string,body:any):Observable<any>{
    return this.http.put<any>(`${this.api}/${id}`,body)
  }
}
