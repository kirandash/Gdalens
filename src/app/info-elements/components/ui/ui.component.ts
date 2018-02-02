import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  uiElementsBoxes = [
    {
      name: 'Rapport',
      icon: 'settings_input_component',
      subtext: 'Form elements from Material design',
      url: '/info/components',
    },
    {
      name: 'Forms',
      icon: 'transform',
      subtext: 'Form elements from Material design',
      url: '/info/tilmelding-besoegsdag-4-2-2018',
    },
    {
      name: 'Charts',
      icon: 'show_chart',
      subtext: 'Custom pluggable charts',
      url: '/info/charts',
    }/*,
    {
      name: 'Icons',
      icon: 'photo_size_select_small',
      subtext: 'Material design icons ready to use',
      url: '/ui/icons',
    }*/
  ];
  constructor() { }

  ngOnInit() {
  }

}
