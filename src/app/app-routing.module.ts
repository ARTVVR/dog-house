import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AboutUsPageComponent from './components/about-us-page/about-us-page.component';
import CotactsPageComponent from './components/cotacts-page/cotacts-page.component';
import GalleryPageComponent from './components/gallery-page/gallery-page.component';
import MainComponent from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contacts', component: CotactsPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
