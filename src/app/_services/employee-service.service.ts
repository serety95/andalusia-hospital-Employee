import { Employee } from './../_models/employee';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  employee: Employee = {
    name: '',
    department: '',
    employeeCode: '',
    birthDay: new Date(),
    gender: '',
  };

  employeesData:any[]=[]
  constructor() {}

  addEmployee(employee: Employee) {
    let employees = JSON.parse(localStorage.getItem('Employees') || '[]');
    let myEmployeeData = {
      name: employee.name,
      department: employee.department,
      employeeCode: employee.employeeCode,
      birthDay: employee.birthDay,
      gender: employee.gender,
    };
    employees.push(myEmployeeData);

    localStorage.setItem('Employees', JSON.stringify(employees));
    this.employeesData = JSON.parse(localStorage.getItem('Employees') || '[]');

  }
  getAllEmployees(): Observable<any[]> {
    this.employeesData = JSON.parse(localStorage.getItem('Employees') || '[]');
    return of(this.employeesData);
  }
}
