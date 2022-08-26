import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }


topHeadingApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ccfe19324d454d24b9dd7d0a8fcfb185";
techApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=ccfe19324d454d24b9dd7d0a8fcfb185'
businessApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ccfe19324d454d24b9dd7d0a8fcfb185'
healthApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=ccfe19324d454d24b9dd7d0a8fcfb185'
entertainmentApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=ccfe19324d454d24b9dd7d0a8fcfb185'
sportsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=ccfe19324d454d24b9dd7d0a8fcfb185'  


topHeading(): Observable<any>{
  return this.http.get(this.topHeadingApiUrl);
}

techNews(): Observable<any>{
  return this.http.get(this.techApiUrl);
}

businessNews(): Observable<any>{
  return this.http.get(this.businessApiUrl);
}

healthNews(): Observable<any>{
  return this.http.get(this.healthApiUrl);
}

entertainmentNews(): Observable<any>{
  return this.http.get(this.entertainmentApiUrl);
}

sportsNews(): Observable<any>{
  return this.http.get(this.sportsApiUrl);
}


}
