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

  profile(){
    let getUrl = this.baseUrl + 'profile'
    return this.http.get(getUrl)
    .pipe(retry(2),tap( )
    )
  }
  updateImage(data:FormData){
    let getUrl = this.baseUrl + 'save-profile-image'
    return this.http.post(getUrl, data)
    .pipe(tap( )
    )
  }
  updateProfile(data:Object){
    let getUrl = this.baseUrl + 'edit-profile'
    return this.http.post(getUrl, data)
    .pipe(tap( )
    )
  }
  updatePassword(data:Object){
    let getUrl = this.baseUrl + 'change-password'
    return this.http.post(getUrl, data)
    .pipe(tap( )
    )
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
  resetPassword(data:Object){
    let getUrl = this.baseUrl + 'start-forgot-password'
    return this.http.post(getUrl, data)
    .pipe(tap( )
    )
  }

  confirmCode(data:Object){
    let getUrl = this.baseUrl + 'confirm-phone-code'
    return this.http.post(getUrl, data)
    .pipe(tap( )
    )
  }

  resendCode(){
    let getUrl = this.baseUrl + 'resend-phone-code'
    return this.http.get(getUrl, {})
    .pipe(tap( )
    )
  }

  setNewPassword(data:Object){
    let getUrl = this.baseUrl + 'finish-forgot-password'
    return this.http.post(getUrl, data)
    .pipe(retry(2),tap( )
    )
  }


  //IMAGE APIS
  publicImage(data:Object){
    let getUrl = this.baseUrl + 'search-for-images'
    return this.http.post(getUrl, data).pipe(retry(2),tap())
  }

  uploadImage(data:FormData){
    let getUrl = this.baseUrl + 'add-image'
    return this.http.post(getUrl, data).pipe(tap())
  }

  myLibrary(data:Object){
    let getUrl = this.baseUrl + 'library'
    return this.http.post(getUrl, data).pipe(retry(2),tap())
  }

  myContributions(data:Object){
    let getUrl = this.baseUrl + 'contributions'
    return this.http.post(getUrl, data).pipe(retry(2),tap())
  }

  editImage(data:Object){
    let getUrl = this.baseUrl + 'update-image'
    return this.http.post(getUrl, data).pipe(retry(2),tap())
  }

  buyImage(data:Object){
    let getUrl = this.baseUrl + 'update-image'
    return this.http.post(getUrl, data).pipe(retry(2),tap())
  }

  likeImage(data:Object){
    let getUrl = this.baseUrl + 'like-image'
    return this.http.post(getUrl, data).pipe(retry(2),tap())
  }

  unlikeImage(data:Object){
    let getUrl = this.baseUrl + 'unlike-image'
    return this.http.post(getUrl, data).pipe(retry(2))
    .toPromise();
  }

  downloadFullImage(data:Object){
    let getUrl = this.baseUrl + 'download-full-image'
    return this.http.post(getUrl, data).pipe(retry(2),tap())
  }

  downloadHighResolutionImage(data:Object){
    let getUrl = this.baseUrl + 'download-image'
    return this.http.post(getUrl, data).pipe(retry(2),tap())
  }

  deleteImage(data:Object){
    let getUrl = this.baseUrl + 'delete-image'
    return this.http.post(getUrl, data).toPromise();
  }

  deleteImages(data:Object){
    let getUrl = this.baseUrl + 'delete-images'
    return this.http.post(getUrl, data).pipe(retry(2),tap())
  }

  relatedImages(data:Object){
    let getUrl = this.baseUrl + 'similar-images'
    return this.http.post(getUrl, data)
    .pipe(retry(2),tap( )
    )
  }

  imageDetails(data:Object){
    let getUrl = this.baseUrl + 'image-details'
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

  dashboard(data:Object){
    let getUrl = this.baseUrl + 'dashboard'
    return this.http.post(getUrl, data)
    .pipe(retry(2),tap( )
    )
  }

  categories(){
    let getUrl = this.baseUrl + 'categories'
    return this.http.get(getUrl)
    .pipe(retry(2),tap( )
    )
  }


  myWithdrawals(){
    let getUrl = this.baseUrl + 'withdrawals'
    return this.http.post(getUrl, {})
    .pipe(retry(2),tap( )
    )
  }


  //ACCOUNT APIS
  addAccount(data:Object){
    let getUrl = this.baseUrl + 'add-bank-account'
    return this.http.post(getUrl, data)
    .pipe(tap( )
    )
  }

  resolveAccount(data:Object){
    let getUrl = this.baseUrl + 'resolve-account'
    return this.http.post(getUrl, data)
    .pipe(tap( )
    )
  }

  deleteAccount(data:Object){
    let getUrl = this.baseUrl + 'delete-bank-account'
    return this.http.post(getUrl, data)
    .pipe(tap( )
    )
  }

  defaultAccount(data:Object){
    let getUrl = this.baseUrl + 'make-account-default'
    return this.http.post(getUrl, data)
    .pipe(tap( )
    )
  }

  withdrawal(data:Object){
    let getUrl = this.baseUrl + 'withdraw'
    return this.http.post(getUrl, data)
    .pipe(retry(2),tap( )
    )
  }

  startAddCard(){
    let getUrl = this.baseUrl + 'start-add-card'
    return this.http.get(getUrl)
    .pipe(retry(2),tap( )
    )
  }

  finishAddCard(data:Object){
    let getUrl = this.baseUrl + 'finish-add-card'
    return this.http.post(getUrl, data)
    .pipe(retry(2),tap( )
    )
  }

  deleteCard(data:Object){
    let getUrl = this.baseUrl + 'delete-card'
    return this.http.post(getUrl, data).toPromise();
  }
  
}
