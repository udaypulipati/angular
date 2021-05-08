import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-employee-editor',
  templateUrl: './employee-editor.component.html',
  styleUrls: ['./employee-editor.component.css']
})
export class EmployeeEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  employeeName = new FormControl('');
  employeeAge = new FormControl('');
  employeeSalary = new FormControl('');
  employeeDOB = new FormControl('');
  employeeCompany = new FormControl('');
  
}
