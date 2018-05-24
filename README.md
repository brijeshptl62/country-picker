# country-picker

A plugin for entering and validating international telephone numbers. It adds a flag dropdown to any input, detects the user's country, displays a relevant placeholder and provides formatting/validation methods.

This is a template for building your own reusable Angular4/Ionic3 module using TypeScript. 

![screen shot 2018-05-24 at 11 22 24 am](https://user-images.githubusercontent.com/31919690/40466786-cde32ef6-5f44-11e8-9746-942bb0a4cd81.png)

![screen shot 2018-05-24 at 11 19 42 am](https://user-images.githubusercontent.com/31919690/40466722-898998e4-5f44-11e8-9614-4d3fc5ab5521.png)


## Browser Compatibility

Chrome | FF | Safari | IE | Chrome Android | Mobile Safari | IE Mob
--- | --- | --- | --- | --- | --- | --- | 
        ✓ |   ✓ |     ✓ | 11 |                   ✓ |              ✓ |       ✓ | 



## Installation

If you'd like to test this package,install it with [npm](https://www.npmjs.com/package/country-picker) run ```npm i country-picker ```

Develop your module like any other ionic 3 & Angular module. Then, run ```npm run build``` to build a local copy.



## Features

   * Automatically select the user's current country using an IP lookup
   * Automatically set the input placeholder to an example number for the selected country
   * Navigate the country dropdown by typing a country's name, or using up/down keys
   * Handle phone number extensions
   * Full validation, including specific error types
   * Retina flag icons
   

## Usage

**app.module.ts**

```

// Import 
import { CountryServiceProvider ,SelectCountryComponent } from 'country-picker';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ...
    
    SelectCountryComponent
  ],
  imports: [
    ...
    
    HttpClientModule // Put Http module here
  ],
   
   ...
   
  providers: [
    ...
    
    CountryServiceProvider
  ]
})

```


**home.html**

```
  <select-country (sendNumber)="getNumber($event)" (sendCountry)="getCountry($event)"></select-country>

```

## Public Methods


**get Selected Country**
```
<select-country (onSelectCountry)="getCountry($event)"></select-country>
```
```
  getCountry(selectedCountry: any){
    console.log(selectedCountry)
  }
```

**get Entered Number**
```
<select-country (onSelectNumber)="getNumber($event)"></select-country>
```
```
  getNumber(enteredNumber: any){
    console.log(enteredNumber.mobile)
  }
```


**Check Number isValid**
```
<select-country (onSelectNumber)="getNumber($event)"></select-country>
```
```
  getNumber(enteredNumber: any){
    console.log(enteredNumber.isValid)
    // isValid is return in boolean form as true | false
  }
```


## Options

**Hide Placeholder Number**
Type: ```Boolean``` Default: ```true```
To hide the country example number as placeholder pass the Boolean value 'false' as [isPlaceholder]="false".

```
<select-country [isPlaceholder]="false"></select-country>
```

**Hide user's country**
Type: ```Boolean``` Default: ```true```
this plugin is use IP address for lookup to set the default country to the user's country. For to disable geoIpLookup mode pass the Boolean value 'false' as [isGeoIpLookup]="false".

```
<select-country [isGeoIpLookup]="false"></select-country>
```

## License

MIT © [Canopas](https://canopas.com/)
