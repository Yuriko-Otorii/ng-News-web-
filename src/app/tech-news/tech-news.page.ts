import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service' 
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.page.html',
  styleUrls: ['./tech-news.page.scss'],
})
export class TechNewsPage implements OnInit {

  constructor(
    public service: ApiService,
    public loadingController: LoadingController
  ) { }

 async ngOnInit() {
  const loading = await this.loadingController.create({
    message: 'Loading...',
  });
  await loading.present();
    this.service.techNews().subscribe(data=> {
      this.service.listOfArticle = data.articles;
      console.log(data);
    })
    loading.dismiss();
  }

}
