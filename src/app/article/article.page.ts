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
    publishedAt: string;
    author: string;
    urlToImage: any;
    name: string;
  } =  {
    ID: null,
    title: null,
    content:null,
    publishedAt: null,
    author: null,
    urlToImage: null ,
    name: null
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
        this.ID = parseInt(params.get('id'), 10);
      });
      
      this.post = this.service.listOfArticle[this.ID];
      console.log(this.post.name);
      console.log(this.post.title);
      

      loading.dismiss();

  }

  
}


