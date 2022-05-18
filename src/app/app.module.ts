import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import MaterialModule from './material/material.module';
import HeaderComponent from './components/header/header.component';
import FooterComponent from './components/footer/footer.component';
import MainComponent from './components/main/main.component';
import CotactsPageComponent from './components/cotacts-page/cotacts-page.component';
import GalleryPageComponent from './components/gallery-page/gallery-page.component';
import AboutUsPageComponent from './components/about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CotactsPageComponent,
    GalleryPageComponent,
    AboutUsPageComponent,
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
    NgxsReduxDevtoolsPluginModule.forRoot(),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class AppModule {}
