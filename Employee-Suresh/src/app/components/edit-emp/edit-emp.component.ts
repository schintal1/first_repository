import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/service/emp.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  editForm:FormGroup;
  submitted:boolean=false;
  
  constructor(private formBuilder: FormBuilder, private router: Router, 
    private empService:EmpService) { }

  ngOnInit() {

      
      let empId=localStorage.getItem("editUserId");
      
      if(!empId){
        alert("invalid Action");
        this.router.navigate(["list-user"]);
        return;
      }
       this.editForm=this.formBuilder.group(
        {
          empId:[],
          firstName:['',Validators.required],
          lastName:['',Validators.required],
          email:['',Validators.required],
          age:['',Validators.required],
          salary:['',Validators.required],

        }
      );

      // Call the service to get the user by ID
      
      this.empService.getEmpById(+empId)
       .subscribe(
        data=>{
          this.editForm.setValue(data);
        }
      );
   
    
      // this.router.navigate(["list-emp"]);
  
  }

  onSubmit(){
    this.submitted=true;
    if(this.editForm.invalid){
      return;
    }

    this.empService.updateEmp(this.editForm.value)
    .subscribe(
      data=>{
        this.router.navigate(['list-emp']);
      },
      error => {
        alert(error);
      }
    );
  }
}