import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpService } from 'src/app/service/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  addForm: FormGroup; 
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private empService:EmpService) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group(
      {
        empid: [],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        age:['', Validators.required],
        salary:['', Validators.required]

      }
    );
  }

    onSubmit() {
      this.submitted = true;

      if (this.addForm.invalid) {
      
        return;
      }

      // Call Service to Create Employee

      this.empService.createEmp(this.addForm.value);
      this.router.navigate(['list-emp']);
      
      this.empService.createEmp(this.addForm.value)
      .subscribe(data => 
        {
          this.router.navigate(['list-emp']);
        }

      );
       
   }

}


