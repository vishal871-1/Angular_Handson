import { Component, OnInit } from '@angular/core';
import { Employee } from 'Models/Employee';
import { Department } from 'Models/Department';
import { Skills } from 'Models/Skills';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
  
  //Creatin array for including departments.
  departments:Department[];

  

  //Creating an object to store employee details.
  employee:Employee;

  empForm: FormGroup;

  constructor() 
  {
    this.employee = {
      id: 0,
      name: "",
      salary: 0,
      permanent: false,
      department: { id: 0, name: "" },
      skill: [],
      dateOfBirth: new Date(),
      photoURL:""
    };
    this.departments = [

      { id: 1, name: "Payroll" },

      { id: 2, name: "Internal" },

      { id: 3, name: "HR" }

    ];

    this.empForm = new FormGroup({
      'name': new FormControl(this.employee.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)]),
      'salary': new FormControl(this.employee.salary, [Validators.required]),
      'department': new FormControl(this.employee.department, [
        Validators.required
      ])
    });
  }

  ngOnInit(): void 
  {

    //***************Note*****************// 
    //Fetch the employee having requisite id inside constructor.
    //Because if you fetch here, then the form data won't be populated with correct employee details.
    //The above happens because we are initialising the form variable inside constructor.
    
  }
  get name() { return this.empForm.get('name'); }
  get salary() { return this.empForm.get('salary'); }

  //Method to be executed on submission of form for displaying form details.
   
  

}
