import { SearchResultComponent } from './Core/search-result/search-result.component';
import { HelperModule } from './helper/helper.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-alerts';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreComponent } from './Core/explore/explore.component';
import { HomeComponent } from './Core/home/home.component';
import { NotfoundComponent } from './Core/notfound/notfound.component';
import { HttpinterceptorService } from './interceptor/httpinterceptor.service';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './Core/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot({maxMessages: 1, timeout: 7000, positionX: 'right'}),
  ],
  providers: [
    CookieService,
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
