import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( 
    public service: ApiService,
    public loadingController: LoadingController,
    ) {}

  async ngOnInit(){
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
      this.service.topHeading().subscribe(data => {
        this.service.listOfArticle = data.articles;
      });
      
      loading.dismiss();
    };    
  
   }

  