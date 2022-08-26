import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TechNewsPage } from './tech-news/tech-news.page';
 
const routes: Routes = [
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
