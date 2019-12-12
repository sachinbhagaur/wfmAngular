import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { AdminService } from '../admin-home/admin.service';


@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {

  constructor(private adminService:AdminService,private fb:FormBuilder) { }

  AddResourceForm=this.fb.group({
    roleId:[''],
    resourceName:[''],
    resourceEmail:[''],
    resourcePassword:['T123'],
    resourceGender:[''],
    resourceDOB:[''],
    resourceSkills:['ANGULAR'],
    resourceExperience:[''],
    resourceMaritalStatus:[''],
    resourceStartDate:['2019-12-13'],
    resourceEndDate:['2019-12-31'],
    resourcePhoneNumber:['']
    
})
ngOnInit(){
  
}

// rolesList:any=[];
//    ngOnInit() {
//      this.adminService.getAllRoles().subscribe(data=>this.rolesList=data);
//    }
// addResource(){
//     console.log(this.AddResourceForm.value);
//     this.adminService.AddResource(this.AddResourceForm.value).subscribe(data=>console.log(data));
//     }
}
