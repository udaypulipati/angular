import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-country-editor',
  templateUrl: './country-editor.component.html',
  styleUrls: ['./country-editor.component.css']
})
export class CountryEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countryName = new FormControl('');
  countryID =  new FormControl('');

}
