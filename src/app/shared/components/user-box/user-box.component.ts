import { IconItem } from './../icons-buttons/icons.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {

  @Input() username: string;
  @Input() image: string;
  // icons
  icons: IconItem[] = [
    {
      name: 'phone',
      color: 'primary',
      text: '64 72 36 60',
    },
    {
      name: 'email',
      color: 'accent',
      text: 'henrik@glamsdalen.dk',
    },
    {
      name: 'verified_user',
      color: 'warn',
      text: 'Huslærer - Hus 19',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
