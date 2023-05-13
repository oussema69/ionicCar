import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  api=environment.Api

constructor(private http:HttpClient) { }
getrecBytechId(id:any):Observable<any>{
  return this.http.get(this.api+"rec/tech/"+id)
}
getinvByreclamation(id:any):Observable<any>{
  return this.http.get(this.api+"inter/rec/"+id)
}
getfalserec():Observable<any>{
  return this.http.get(this.api+"isvalid")
}
addInter(dataSend:any):Observable<any>{
  return this.http.post(this.api+"inter",dataSend)
}
getInterByUser(id:any):Observable<any>{
  return this.http.get(this.api+"inter/user/"+id)
}
updatevalidation(id:any):Observable<any>{
  return this.http.put(this.api+"rec/update/isvalid/"+id,{})
}
}
