import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emp } from '../models/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }

  //webService base url
  baseUrl = "http://localhost:8080/api/employees";

  getEmps(){
    
    return this.http.get<Emp[]>(this.baseUrl+"/empList");
 
  }

  //Create Emp
  createEmp(emp:Emp){
  return this.http.post(this.baseUrl+"/saveEmp",emp,{responseType:'text'});
  }

  //Modify Emp
  updateEmp(emp:Emp){
  return this.http.put(this.baseUrl+ "/updateEmp/"+ emp.empId,emp);
  }

//Delete Emp
 deleteEmp(empId:number){
  return this.http.delete(this.baseUrl+ "/deleteEmp/" + empId);
 }

//Get Emp by ID

getEmpById(empId:number){
  return this.http.get(this.baseUrl+ "/getEmp/" + empId);
}

}
