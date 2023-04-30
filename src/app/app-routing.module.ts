import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import AboutUsPageComponent from './components/about-us-page/about-us-page.component';
import GalleryPageComponent from './components/gallery-page/gallery-page.component';
import MainComponent from './components/main/main.component';
import ServicesPageComponent from './components/services-page/services-page.component';
import DataShopComponent from './components/data-shop/data-shop.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'shop', component: DataShopComponent },
  { path: '**', redirectTo: '' },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
