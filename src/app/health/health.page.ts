import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service' 
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  healthNewsDisplay:any =[];


  constructor(
    public service: ApiService,
    public loadingController: LoadingController
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
      this.service.healthNews().subscribe(data=> {
        this.healthNewsDisplay = data.articles;
        console.log(data);
      })
      loading.dismiss();
    }

}
