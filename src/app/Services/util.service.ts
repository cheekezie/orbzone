import { ShareComponent } from './../helper/share/share.component';
import { AddCollectionComponent } from './../helper/add-collection/add-collection.component';
import { ImagePreviewDioalgComponent } from './../helper/image-preview-dioalg/image-preview-dioalg.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { DeleteDialogComponent } from '../account/delete-dialog/delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  encryptSecretKey = "diego";
  constructor(
    private router:Router,
    private matDialog: MatDialog,
    private jwtHelper: JwtHelperService,
    private snackBar: MatSnackBar,
    private cookieService: CookieService
    ) {
  }

  private gallerySubject = new BehaviorSubject<any>('');
  gallery = this.gallerySubject.asObservable();
  private profileSubject = new BehaviorSubject<any>('');
  prifleChange = this.profileSubject.asObservable();

  storeGallery(data){
    this.gallerySubject.next(data);
  }
  setProfileChange(data){
    this.profileSubject.next(data);
  }

  setUserObject(userObject) {
    this.cookieService.set('/youza', JSON.stringify(userObject), 2, );
  }

  getUserObject() {
    const user = this.cookieService.get('/youza');
    if(user){
      return JSON.parse(user)
    }
  }
  
  //Temporary token generated during pwd reset
  setTempToken(token){
    this.cookieService.set('/temp-token', token, 2, );
  }
  getTempToken(){
    const token = this.cookieService.get('/temp-token');
    if(token){
      return token
    }
  }

  //AUTH TOKEN
  setToken(token){
    this.cookieService.set('/key', token, 2, );
  }
  getToken(){
    const token = this.cookieService.get('/key');
    if(token){
      return token
    }
  }

  isAthourized(allowedUsertypes: string[]): any{
    //check if the list of allowedusertpes for aroute is empty, 
    //if empty, authorize the user to access the page
    if (allowedUsertypes == null || allowedUsertypes.length === 0){
        return true;
    }
    let user = this.getUserObject()
    if(user){
      const authUsertype = user.role;
      return allowedUsertypes.includes(authUsertype);
    }
  }

  removeUser() {
  this.cookieService.deleteAll();
  document.cookie.split(";").forEach(function(c) { document.cookie = 
  c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  }

  getUserType(){
    const token = this.cookieService.get('/key');
    return this.jwtHelper.decodeToken(token).scopes
  }
  isLoggedIn(): boolean {
    const token = this.cookieService.get('/key');
    if(!token || this.jwtHelper.isTokenExpired(token)){
      return false;
    }
    return true
  }
  
  logout() {
    this.removeUser();
    this.router.navigateByUrl("/");
  }
  
  //NAVIGATION TO SEARCH PAGE
  searchRoute(path,query){
    this.router.navigate([path], {
      queryParams: {
        tag : query
      },
      queryParamsHandling: 'merge',
    });
  }

  //SNACKBAR METHODS
  succesSnackbar(msg){
    this.snackbarConfig(
      'Success',msg,'success-snackbar'
    )
  }

  errorSnackbar(msg){
    this.snackbarConfig(
      'Error',msg,'error-snackbar'
    )
  }  

  warningSnackbar(msg){
    this.snackbarConfig(
      'Warning',msg,'warning-snackbar'
    )
  }

  snackbarConfig(title,msg,theme){
    this.snackBar.open(title, msg, {
      duration: 7000,
      verticalPosition: 'top',
      //horizontalPosition: 'right',
      panelClass: [theme],
   });
  }

  //MATERIAL DIALOG HANDLES
  dialogConfig(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;
    return dialogConfig
  }
  open(item: Object): void {
    const dialogConfig = this.dialogConfig();
    dialogConfig.data = item;
    dialogConfig.width = '100%';
    this.matDialog.open(ImagePreviewDioalgComponent, dialogConfig);  
  }
  addCollection(data: Object): void {
    const dialogConfig = this.dialogConfig();
    dialogConfig.data = data;
    dialogConfig.disableClose = false;
    dialogConfig.width = '38rem';
    this.matDialog.open(AddCollectionComponent, dialogConfig);  
  }
  share(data: Object): void {
    const dialogConfig = this.dialogConfig();
    dialogConfig.data = data;
    dialogConfig.disableClose = false;
    dialogConfig.width = '40rem';
    this.matDialog.open(ShareComponent, dialogConfig);  
  }

}
