/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular'; 

import{ FormsModule} from '@angular/forms'


//FIREBASE
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule} from   '@angular/fire/compat/firestore'
import { AngularFireAuthModule} from '@angular/fire/compat/auth'
import { AngularFireStorageModule} from '@angular/fire/compat/storage'//'@angular/fire/compat/storage'

//ENVIROMENTS
import { environment } from '../environments/environment'

//AUTH SERVICE
import {AuthService} from './service/auth.service'
import { SpotifyService } from './service/spotify.service';

//AUTH GUARD
import {AuthGuard} from './guards/auth.guard'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//
import { HttpClient, HttpClientModule } from '@angular/common/http'
 
@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    SpotifyService,
    {  provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
