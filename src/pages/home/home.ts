import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {CountryServiceProvider} from "../../providers/country-service/country-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  logoImage: string = "../../assets/imgs/home.png";
  isValid: boolean;
  isInvalid: boolean;
  allCountries: any;
  activeFlag: string;
  activeCountry: any;
  mobile: string;
  selectedCountry: any = [];
  numberPlaceholder: any;

  constructor(public navCtrl: NavController, public http: HttpClient, public countryService: CountryServiceProvider) {
  }

  ionViewDidLoad() {
    document.getElementById("flagUl").style.display = "none";

    var self: any = this;

    this.http.get("https://api.ipdata.co").subscribe(data => {
      if (data) {
        var countryResponce: any = data;
        var countryCodes: any = (countryResponce.country_code).toLowerCase();
        self.activeFlag = "http://www.geonames.org/flags/x/"+ countryCodes +".gif";
        var activeCountryArray: any;
        activeCountryArray = this.allCountries.filter((obj) => {
          return obj.countryCode == countryCodes.toUpperCase();
        });
        this.activeCountry = activeCountryArray[0];
        if (this.activeCountry.numberExample) {
          this.numberPlaceholder = this.activeCountry.numberExample;
        } else {
          this.numberPlaceholder = "Mobile Number";
        }
      }
    }, error => {
      console.log(JSON.stringify(error));
      self.activeFlag = 'http://www.geonames.org/flags/x/us.gif';
    });

    if (!this.activeFlag) {
      this.activeFlag = 'http://www.geonames.org/flags/x/us.gif';
    }
    this.countryService.getAllCountry().then(
      (success) => {
        self.allCountries = success;
      }).catch(
      (err) => {
        console.log(err);
      });

    this.isValid = false;
    this.isInvalid = false;

  }

  selectCountry() {
    document.getElementById("flagUl").style.display = "block";
    this.isValid = false;
    this.isInvalid = false;
    this.mobile = null;

    if (this.activeFlag) {
      var targetLi: any = document.getElementById(this.activeCountry.flag);
      targetLi.scrollIntoView(((targetLi.offsetTop) / 4) - 50);
    }

    var self: any = this;
    document.addEventListener("keydown", function (zEvent) {

      var selectedCountry: any = [];
      for (var x in self.allCountries) {
        if ((((self.allCountries[x].name).substring(0, 1)) == (zEvent.key).toUpperCase())) {
          selectedCountry.push(self.allCountries[x].flag);
          break
        }
      }
      self.selectedCountry = selectedCountry;
      if (self.selectedCountry.length > 0) {
        var targetLi: any = document.getElementById(self.selectedCountry);
        targetLi.scrollIntoView(((targetLi.offsetTop) / 4) - 50);
      }
    });

  }

  validationCheckFn(mobile: any) {
    if (mobile && (/^\d+$/.test(mobile))) {
      const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
      const number = phoneUtil.parseAndKeepRawInput(mobile, this.activeCountry.countryCode);

      if (phoneUtil.isValidNumber(number)) {
        this.isValid = true;
        this.isInvalid = false;
      } else {
        this.isValid = false;
        this.isInvalid = true;
      }
    } else {
      this.isValid = false;
      this.isInvalid = false;
    }
  }

  chooseCountry(country) {
    document.getElementById("flagUl").style.display = "none";
    this.activeCountry = country;
    if (this.activeCountry.numberExample) {
      this.numberPlaceholder = this.activeCountry.numberExample;
    } else {
      this.numberPlaceholder = "Mobile Number";
    }
    this.activeFlag = country.flagImg;
  }


}
