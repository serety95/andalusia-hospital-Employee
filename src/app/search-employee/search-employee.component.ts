import { Employee } from './../_models/employee';
import { EmployeeServiceService } from './../_services/employee-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss'],
})
export class SearchEmployeeComponent implements OnInit {
  employee: Employee = {
    name: '',
    department: '',
    employeeCode: '',
    birthDay: new Date(),
    gender: '',
    checked: false,
  };
  myEmployees: any[] = [];
  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(
      (res) => {
        this.myEmployees = res;
      },
      (err) => {
        console.log(err);
      },
      () => {}
    );
  }

  title = 'Employee search';
  searchText: any;

  onChange($event) {
    let text = $event.target.options[$event.target.options.selectedIndex].text;
    this.searchText = text;
  }
  CheckAll() {
    console.log(this.myEmployees);
    if (this.myEmployees.every((val) => val.checked == true))
      this.myEmployees.forEach((val) => {
        val.checked = false;
      });
    else
      this.myEmployees.forEach((val) => {
        val.checked = true;
      });
  }
}
