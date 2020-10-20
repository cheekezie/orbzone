import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { gallery } from './../gallery';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl  = environment.url;
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  constructor(
    private http: HttpClient
  ) { }
  getGallery() {
    //let getUrl = this.baseUrl + '';
    // return this.http.get(getUrl)
    // .toPromise();
    return gallery;
  }

  signup(data:Object){
    let getUrl = this.baseUrl + 'sign-up'
    return this.http.post(getUrl, data)
    .pipe(retry(2),tap( )
    )
  }

  login(data:Object){
    let getUrl = this.baseUrl + 'sign-in'
    return this.http.post(getUrl, data)
    .pipe(retry(2),tap( )
    )
  }

  publicImage(data:Object){
    let getUrl = this.baseUrl + 'search-for-images'
    return this.http.post(getUrl, data).pipe(retry(3))
    .toPromise();
  }

  relatedImages(data:Object){
    let getUrl = this.baseUrl + 'similar-images'
    return this.http.post(getUrl, data)
    .pipe(retry(2),tap( )
    )
  }

  searchImage(data:Object){
    let getUrl = this.baseUrl + 'search-for-images'
    return this.http.post(getUrl, data)
    .pipe(retry(2),tap( )
    )
  }
}
