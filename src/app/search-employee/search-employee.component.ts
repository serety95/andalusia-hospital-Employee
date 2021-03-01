import { Employee } from './../_models/employee';
import { EmployeeServiceService } from './../_services/employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent implements OnInit {
 
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit(): void {
    let Employees=this.employeeService.getAllEmployees()
    console.log(Employees)
    
  }
  title = 'Employee search';
  searchText;
  myEmployees=this.employeeService.getAllEmployees()

}
