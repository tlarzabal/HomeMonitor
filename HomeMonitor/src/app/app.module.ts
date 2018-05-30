import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HobbiesPage} from '../pages/hobbies/hobbies';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ListAdsPage} from "../pages/Ads/listAds/listAds";
import {AdOrFlatsharingPage} from "../pages/Ads/adOrFlatsharing/adOrFlatsharing";
import {CreateAdPage} from "../pages/Ads/create-ad/create-ad";
import {HttpModule} from '@angular/http';
import {AdProvider} from '../providers/ad/ad';
import {UserProvider} from '../providers/user/user';
import {HttpClientModule} from "@angular/common/http";
import {IonicStorageModule} from '@ionic/storage';


import {ShoppingListPage} from "../pages/shopping-list/shopping-list";
import {TaskpagePage} from "../pages/taskpage/taskpage";
import {EventPage} from "../pages/Events/event/event";
import { EventProvider } from '../providers/event/event';
import {CreateEventPage} from "../pages/Events/create-event/create-event";

@NgModule({
  declarations: [
    MyApp,
    HobbiesPage,
    AdOrFlatsharingPage,
    ListAdsPage,
    HomePage,
    TabsPage,
    TaskpagePage,
    ShoppingListPage,
    TabsPage,
    CreateAdPage,
    EventPage,
    CreateEventPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents:
    [
      TaskpagePage,
      MyApp,
      HobbiesPage,
      AdOrFlatsharingPage,
      ListAdsPage,
      HomePage,
      TabsPage,
      ShoppingListPage,
      CreateAdPage,
      EventPage,
      CreateEventPage
    ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AdProvider,
    UserProvider,
    EventProvider
  ]
})
export class AppModule {
}
