import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import MaterialModule from './material/material.module';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import MainComponent from './components/main/main.component';
import GalleryPageComponent from './components/gallery-page/gallery-page.component';
import AboutUsPageComponent from './components/about-us-page/about-us-page.component';
import ServicesPageComponent from './components/services-page/services-page.component';
import DataShopComponent from './components/data-shop/data-shop.component';

const mapConfig: YaConfig = {
  apikey: 'b6331ca0-fb8c-483b-93a0-c534b4023d24',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ServicesPageComponent,
    GalleryPageComponent,
    AboutUsPageComponent,
    DataShopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class AppModule {}
