import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { Enroll } from './enroll';
import { EnrollService } from './enroll.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  enroll: Enroll;

  // Autocomplete
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: any[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  // Checkbox
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  // Radio
  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  years = [
    '2018/2019',
    '2019/2020',
    '2020/2021',
    '2021/2022',
    '2022/2023'
  ];

  classes = [
    '9. KLASSE',
    '10. KLASSE'
  ];

  // Select
  persons = [
    { value: 'person-1', viewValue: 'Alene' },
    { value: 'person-2', viewValue: 'To' },
    { value: 'person-3', viewValue: 'Tre' },
    { value: 'person-4', viewValue: 'Fire' },
    { value: 'person-5', viewValue: 'Fem' },
    { value: 'person-6', viewValue: 'Seks' }
  ];

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  // Slider
  autoTicks = false;
  sliderDisabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;

  constructor(private enrollService: EnrollService, private router: Router) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(state => state ? this.filterStates(state) : this.states.slice());
  }

  ngOnInit() {
    this.enroll = new Enroll();
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  save() {
    /*console.log('submitted');*/
    this.enrollService.save(this.enroll, result=>{
      if(result){
        alert("Tak fordi du har indsendt formularen. Vi kontakter dig snart.");
        this.router.navigate(["/"]);
      }
    });
  }

  checkProperties(obj) {
      for (var key in obj) {
          if (obj[key] !== null && obj[key] != "")
              return false;
      }
      return true;
  }

}
