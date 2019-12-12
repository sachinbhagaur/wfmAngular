import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewAllResourceComponent } from '../view-all-resource/view-all-resource.component';




@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  constructor(private http:HttpClient) { }
  
  getAllResource() {
    return this.http.get<ViewAllResource[]>("http://localhost:1235/WfManagement_Frontend/viewAllResource");
  }
  getAllRole()
{
  return this.http.get<Role[]>("http://localhost:1235/WfManagement_Frontend/allRole");
}

  addResource(rdObj):Observable<any>{
    console.log(rdObj)
    return this.http.post<any>("http://localhost:1235/WfManagement_Frontend/addResource",rdObj,{responseType:'text' as 'json'});
  }
  
}
