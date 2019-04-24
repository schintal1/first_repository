import { Component, OnInit } from '@angular/core';

import { Emp } from 'src/app/models/emp';
import { EmpService } from 'src/app/service/emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  emp:Emp[];
  constructor(private router:Router, private empService:EmpService) { }

  ngOnInit() {
    this.empService.getEmps()
    .subscribe(data =>{
      this.emp=data;
    });
  }

  //navigate to add-employee component
  addEmp() :void{
    this.router.navigate(["add-emp"]);
  }

  deleteEmp(emp:Emp):void{
    let result=confirm("Do you want to delete Employee?");
    if(result){
      
      this.empService.deleteEmp(emp.empId)
      
      .subscribe(
        data=> {
          (this.emp=this.emp.filter(u => u!==emp))
          location.reload();
      }

      );
      location.reload();
      
    } 
    }

    editEmp(emp:Emp):void{
      localStorage.removeItem("editUserId");
      //setting the existing userId to be update  in local storage
      localStorage.setItem("editUserId",emp.empId.toString());
      this.router.navigate(["edit-emp"]);
    }
}
