import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TechNewsPageRoutingModule } from './tech-news-routing.module';
import { TechNewsPage } from './tech-news.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechNewsPageRoutingModule,
    SharedModule
  ],
  declarations: [TechNewsPage]
})
export class TechNewsPageModule {}
