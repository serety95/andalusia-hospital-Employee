import { Employee } from './../_models/employee';
import { EmployeeServiceService } from './../_services/employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
employees:any=[]
  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit() {
   this.employees=  this.employeeService.getAllEmployees()
   
  }

}
