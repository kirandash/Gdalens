import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-forms',
  templateUrl: './temp-forms.component.html',
  styleUrls: ['./temp-forms.component.scss']
})
export class TempFormsComponent implements OnInit {
  studentName: string = 'Kiran';
  studentLastName: string = 'Dash';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any) {
  	console.log(value);
  }
}
