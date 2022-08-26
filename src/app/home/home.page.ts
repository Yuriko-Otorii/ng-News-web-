import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  topHeadingDisplay:any = [];
  // idNumber: number;

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
        this.topHeadingDisplay = data.articles;
        // this.numberingId();
        console.log(data);
        console.log(data.articles[0].url);
        // console.log(this.topHeadingDisplay[0].source.id);
        // console.log(this.topHeadingDisplay);
      });
      loading.dismiss();
    };    
  
    // numberingId(){
    //   for(const[index, value] of this.topHeadingDisplay.entries()){

    //   }
   }

  