import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
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
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';



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
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAoUXMzvXuuxkZO4JimW1esV6HWvNqdmo0'
    })
  ],
  providers: [HttpreqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
