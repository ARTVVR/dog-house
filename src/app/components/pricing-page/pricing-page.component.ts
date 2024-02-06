import { Component } from '@angular/core';

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Йоркшерский терьер',
    firstPrice: '40-45',
    secPrice: '35',
  },
  {
    position: 2,
    name: 'Шпиц',
    firstPrice: '45-55',
    secPrice: '35',
  },
  {
    position: 3,
    name: 'Той-пудель',
    firstPrice: '50-60',
    secPrice: '40 ',
  },
  {
    position: 4,
    name: 'Бишон',
    firstPrice: '55',
    secPrice: '40',
  },
  {
    position: 5,
    name: 'Мальтезе',
    firstPrice: '45',
    secPrice: '35',
  },
  {
    position: 6,
    name: 'Шитцу',
    firstPrice: '50',
    secPrice: '40',
  },
  {
    position: 7,
    name: 'Вест-хайленд-уайт-терьер',
    firstPrice: '55',
    secPrice: '40',
  },
  {
    position: 8,
    name: 'Цвергшнауцер',
    firstPrice: '50',
    secPrice: '40',
  },
  {
    position: 9,
    name: 'Кокер-спаниель',
    firstPrice: '50',
    secPrice: '40',
  },
];

export interface PeriodicElement {
  name: string;

  position: number;

  firstPrice: string;

  secPrice: string;
}

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.scss'],
})
export class PricingPageComponent {
  displayedColumns: string[] = [
    'demo-position',
    'demo-name',
    'demo-weight',
    'demo-symbol',
  ];

  dataSource = ELEMENT_DATA;
}
