import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  validate(rId,pass):Observable<any>{
    return this.http.post<any>("http://localhost:1235/WfManagement_Frontend/Login?rId="+rId+"&&rPassward="+pass,
    null);
  }
}
