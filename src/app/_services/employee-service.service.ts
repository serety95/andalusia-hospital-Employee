import { Employee } from './../_models/employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
employee:Employee={
  name: "",
  department: "",
  employeeCode: "",
  birthDay:new Date(),
  gender:""}
  constructor() { }

  addEmployee(employee:Employee){
    let employees= JSON.parse(localStorage.getItem("Employees") || "[]");
    let myEmployeeData = {
      name: employee.name,
      department: employee.department,
      employeeCode: employee.employeeCode,
      birthDay:employee.birthDay,
      gender:employee.gender
    }
    employees.push(myEmployeeData); 
    localStorage.setItem("Employees", JSON.stringify(employees));
    
    
   let employeesData= JSON.parse(localStorage.getItem("Employees") || "[]");
  
  console.log( employeesData);
  }
  getAllEmployees(){
    let employeesData:Employee= JSON.parse(localStorage.getItem("Employees") || "[]");
  
  return employeesData
  }



}
