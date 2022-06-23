import { Component } from '@angular/core';
import {
  dataCards,
  INITIAL_NUMBER,
  URL_PHOTO_SERVICES,
} from 'src/app/constants/constants';
import IDataServices from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export default class ServicesPageComponent {
  public panelOpenState: boolean = false;

  public currentOpenedItemId: number = INITIAL_NUMBER;

  public imgUrl: string = `${URL_PHOTO_SERVICES}${this.currentOpenedItemId}-uslugi-dlya-sobak-i-koshek-v-soligorske-dog-haus.jpg`;

  public cards: IDataServices[] = dataCards;

  public handleOpened(item: IDataServices): void {
    this.currentOpenedItemId = item.id;
    this.imgUrl = `${URL_PHOTO_SERVICES}${this.currentOpenedItemId}-uslugi-dlya-sobak-i-koshek-v-soligorske-dog-haus.jpg`;
  }

  public handleClosed(item: IDataServices): void {
    if (this.currentOpenedItemId === item.id) {
      this.imgUrl = `${URL_PHOTO_SERVICES}${INITIAL_NUMBER}-uslugi-dlya-sobak-i-koshek-v-soligorske-dog-haus.jpg`;
    }
  }
}
