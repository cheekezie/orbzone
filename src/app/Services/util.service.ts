import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  encryptSecretKey = "diego";
  constructor(
    private router:Router,
    private snackBar: MatSnackBar,
    private cookieService: CookieService
    ) {
  }

  private gallerySubject = new BehaviorSubject<any>('');
  gallery = this.gallerySubject.asObservable();

  storeTeachers(data){
    this.gallerySubject.next(data);
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
    //check if the list of allowedusertpes for aroute is empty, if empty, authorize the user to access the page
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

  isLoggedIn(): boolean {
    if(localStorage.getItem('x')){
      return true;
    }
    return false
  }
  
  logout() {
    this.removeUser();
    this.router.navigateByUrl("/");
  }
  dialogConfig(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;
    return dialogConfig
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
      duration: 70000,
      verticalPosition: 'top',
      //horizontalPosition: 'right',
      panelClass: [theme],
   });
  }
}
