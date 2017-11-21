import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { RequestComponent } from './request/request.component';
import { BannerComponent } from './banner/banner.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpreqService} from './httpreq.service';
import {HttpgetService} from './httpget.service';


const routes: Routes = [
 {
   path: 'home', component: HomeComponent
 },
 {
   path: 'request', component: RequestComponent
 },
 {
  path: 'dashboard', component: BodyComponent
 },
 {
   path: '**', component: NotFoundComponent
 }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    RequestComponent,
    BannerComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [HttpreqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
