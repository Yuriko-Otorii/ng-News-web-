import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service' 
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  businessNewsDisplay:any =[];


  constructor(
    public service: ApiService,
    public loadingController: LoadingController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
      this.service.businessNews().subscribe(data=> {
        this.businessNewsDisplay = data.articles;
        console.log(data);
      })
      loading.dismiss();
    }

}
