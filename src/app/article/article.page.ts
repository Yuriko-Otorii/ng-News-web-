import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'

import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service'
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})

export class ArticlePage implements OnInit {
  
  ID: number;
  post: {
    ID: number;
    title: string;
    content:string;
    date: string;
  } =  {
    ID: null,
    title: null,
    content:null,
    date: null
  }

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public service: ApiService,
    public loadingController: LoadingController
    ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.ID = parseInt(params.get('articleId'), 10);
      });
      
      loading.dismiss();
  }

  ionViewDidEnter(){
    this.http.get<{
      ID: number;
      title: string;
      content:string;
      date: string;
    }>('http://localhost:8100/article/' + this.ID).subscribe(data => {this.post = data;});
  }
  
}


