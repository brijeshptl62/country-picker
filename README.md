# country-picker

A plugin for entering and validating international telephone numbers. It adds a flag dropdown to any input, detects the user's country, displays a relevant placeholder and provides formatting/validation methods.

This is a template for building your own reusable Angular4/Ionic3 module using TypeScript. 

## Installation

If you'd like to test this package,install it with npm run ```npm i country-picker ```

Develop your module like any other Angular 2 module. Then, run npm run build to build a local copy.


## Features

   ~ Automatically select the user's current country using an IP lookup
   ~ Automatically set the input placeholder to an example number for the selected country
   ~ Navigate the country dropdown by typing a country's name, or using up/down keys
   ~ Handle phone number extensions
   ~ Full validation, including specific error types
   ~ Retina flag icons
   

## Usage

**  app.module.ts  **

```
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from "@angular/common/http";


// Import your module
import { CountryServiceProvider ,SelectCountryComponent } from 'country-picker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectCountryComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpClientModule
    MyModule // Put your module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CountryServiceProvider
  ]
})
export class AppModule {}

```

---

**  home.html  **

```

<ion-content >
  <select-country (sendNumber)="getNumber($event)" (sendCountry)="getCountry($event)"></select-country>
</ion-content>

```

---

**  home.ts  **

```

  getNumber(enteredNumber: any){
    console.log(enteredNumber)
  }

  getCountry(selectedCountry: any){
    console.log(selectedCountry)
  }

```

---

## License

MIT © [Canopas]()
