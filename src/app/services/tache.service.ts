import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  api=environment.Api
  constructor(private http:HttpClient) {

  }
  add(dataSend:any):Observable<any>{
    return this.http.post(this.api+"tache",dataSend)
  }
  gettacheByTypeId(type:any,id:any):Observable<any>{
    return this.http.get(this.api+"tache/type/"+type+"/"+id)
  }

}
