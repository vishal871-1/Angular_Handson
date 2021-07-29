import { Component, OnInit } from '@angular/core';
import {Employee} from 'Models/Employee';
import { Department } from 'Models/Department';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit 
{
  employee: Employee;
  departments: Department[];
  //Creating an object of Employee type.
   
  

  //Creating array for drop
  
  constructor() { 
    this.employee={
      id:0,
      name:"",
      salary:0,
      permanent:false,
      department: {id:0,name:""},
      skill:[],
      dateOfBirth:new Date(),
      photoURL:""
    };
    this.departments = [

      { id: 1, name: "Payroll" },

      { id: 2, name: "Internal" },

      { id: 3, name: "HR" }

    ];

  }
  onSubmit(empForm: any): void {
    this.employee.name = empForm.value.Name;
    this.employee.salary = empForm.value.Salary;
    this.employee.permanent = empForm.value.Permanent;
    var obj = this.departments.find(i => i.id == empForm.value.Department);
    if (obj != null) {
      this.employee.department = obj;
    }
  }

  ngOnInit(): void 
  {
    this.departments=[{id:1,name:"Payroll"},{id:2,name:"Internal"},{id:3,name:"HR"}];
  }

  

}
