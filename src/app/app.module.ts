import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {HttpClientModule} from "@angular/common/http";
import { CountryServiceProvider } from '../providers/country-service/country-service';
import {SelectCountryComponent} from "../components/select-country/select-country";
import {FlagDropdownComponent} from "../components/flag-dropdown/flag-dropdown";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectCountryComponent,
    FlagDropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CountryServiceProvider
  ]
})
export class AppModule {}
