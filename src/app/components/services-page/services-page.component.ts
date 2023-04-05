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
  public panelOpenState = false;

  public currentOpenedItemId = INITIAL_NUMBER;

  public imgUrl = `${URL_PHOTO_SERVICES}${this.currentOpenedItemId}-uslugi-dlya-sobak-i-koshek-v-soligorske-dog-haus.jpg`;

  public cards = dataCards;

  public handleOpened({ id }: IDataServices): void {
    this.currentOpenedItemId = id;
    this.imgUrl = `${URL_PHOTO_SERVICES}${this.currentOpenedItemId}-uslugi-dlya-sobak-i-koshek-v-soligorske-dog-haus.jpg`;
  }

  public handleClosed({ id }: IDataServices): void {
    if (this.currentOpenedItemId === id) {
      this.imgUrl = `${URL_PHOTO_SERVICES}${INITIAL_NUMBER}-uslugi-dlya-sobak-i-koshek-v-soligorske-dog-haus.jpg`;
    }
  }
}
