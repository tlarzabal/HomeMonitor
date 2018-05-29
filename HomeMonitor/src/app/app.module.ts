import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HobbiesPage} from '../pages/hobbies/hobbies';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CreateAdPage} from "../pages/create-ad/create-ad";
import { HttpModule } from '@angular/http';
import { AdProvider } from '../providers/ad/ad';
import { UserProvider } from '../providers/user/user';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MyApp,
    HobbiesPage,
    ContactPage,
    HomePage,
    TabsPage,
    CreateAdPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HobbiesPage,
    ContactPage,
    HomePage,
    TabsPage,
    CreateAdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdProvider,
    UserProvider
  ]
})
export class AppModule {}
