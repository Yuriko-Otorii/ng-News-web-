import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { TechNewsPage } from './tech-news/tech-news.page';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'tech',
      // loadChildren: () => import('./tech-news/tech-news.module').then( m => m.TechNewsPageModule)
      component: TechNewsPage
    },
    {
      path: 'article/:id',
      loadChildren: () => import('./article/article.module').then( m => m.ArticlePageModule)
    },
    {
      path: 'health',
      loadChildren: () => import('./health/health.module').then( m => m.HealthPageModule)
    },
    {
      path: 'business',
      loadChildren: () => import('./business/business.module').then( m => m.BusinessPageModule)
    },
  ])],
  providers: [{ provide: RouteReuseStrategy,  useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
