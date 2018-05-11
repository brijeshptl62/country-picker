import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CountryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class CountryServiceProvider {

  constructor(public http: HttpClient) {
  }

  getAllCountry()
  {
    return new Promise(resolve => {
      this.http.get('../../assets/countries.json').subscribe(data => {
        let result = data.map(function(obj) {
          return {
            name: obj.name,
            countryCode: obj.countryCode,
            dialCode: "+"+obj.callingCodes[0],
            flag:"flag-icon-"+obj.countryCode.toLowerCase()
          }
        });
        resolve(result);
      }, err => {
        console.log(err);
      });
    });
  }

}
