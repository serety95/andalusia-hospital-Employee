import { EmployeeServiceService } from './../_services/employee-service.service';
import { Employee } from './../_models/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employee:Employee={
    name: "",
    department: "",
    employeeCode: "",
    birthDay:new Date(),
    gender:""}
  constructor(private employeeService:EmployeeServiceService) { }
  title = 'Add Employee';
  ngOnInit(): void {
  }
addEmployee():void{
this.employeeService.addEmployee(this.employee)
alert(JSON.stringify(this.employee)+"....employee added")
}
}
