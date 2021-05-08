import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  studentID = new FormControl('');
  studentName = new FormControl('');
}
