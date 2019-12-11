import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  redirectUrl:string='admin';
  //loginService: any;
  
  constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router) { }
  //constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }

  login=this.fb.group({
    rId:['',[Validators.required]],
    pass:['',[Validators.required]]
  });
  get rId(){
    return this.login.get('rId');
    }
  
    get pass(){
    return this.login.get('pass');
    }
    loginSubmit(){
      console.log(this.login.value);
       this.loginService.validate(this.login.value.rId,this.login.value.pass).subscribe(
         data=>{
           if(data.role.roleType=='ADMIN')
           {
            
           sessionStorage.setItem('rObj', JSON.stringify(data));
            this.router.navigate([this.redirectUrl]);
           }
           if(data.role.roleType=='MANAGER')
           {
            
           sessionStorage.setItem('rObj', JSON.stringify(data));
            this.router.navigate(['manager']);
           }
           },
      
         error=>{
           alert("given id or passwors is wrong");
           this.router.navigate(['./login']);
         }
       );
}
}
