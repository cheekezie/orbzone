import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from "@auth0/angular-jwt";
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreComponent } from './Core/explore/explore.component';
import { HomeComponent } from './Core/home/home.component';
import { NotfoundComponent } from './Core/notfound/notfound.component';
import { SearchResultComponent } from './Core/search-result/search-result.component';
import { HelperModule } from './helper/helper.module';
import { HttpinterceptorService } from './interceptor/httpinterceptor.service';
import { MaterialModule } from './material/material.module';
import { ApiService } from './Services/api.service';
import { UtilService } from './Services/util.service';

export function tokenGetter() {
  return '';
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    NotfoundComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    HelperModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    })
  ],
  providers: [
    CookieService,
    UtilService,
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true
    },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
