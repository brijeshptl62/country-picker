import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PhoneVerificationPage} from "../phone-verification/phone-verification";
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

  login() {
    console.log(this.activeCountry);
    console.log(this.mobile);
    console.log(this.activeFlag);
    // this.navCtrl.push(PhoneVerificationPage);
  }

  ionViewDidLoad() {
    document.getElementById("flagUl").style.display = "none";

    var self: any = this;

    this.http.get("https://api.ipdata.co").subscribe(data => {
      var countryCode: any = (data.country_code).toLowerCase();
      self.activeFlag = 'flag-icon-' + countryCode;
      var activeCountryArray: any;
      activeCountryArray = this.allCountries.filter((obj) => {
        return obj.flag === this.activeFlag;
      });
      this.activeCountry = activeCountryArray[0];
      if (this.activeCountry.numberExample) {
        this.numberPlaceholder = this.activeCountry.numberExample;
      } else {
        this.numberPlaceholder = "Mobile Number";
      }
    }, error => {
      console.log(JSON.stringify(error.json()));
      self.activeFlag = 'flag-icon-us';
    });

    if (!this.activeFlag) {
      this.activeFlag = 'flag-icon-us';
    }
    this.countryService.getAllCountry().then(
      (success) => {
        self.allCountries = success;
        var activeCountryArray: any;
        if (!this.activeFlag) {
          activeCountryArray = this.allCountries.filter((obj) => {
            return obj.flag === this.activeFlag;
          });
          this.activeCountry = activeCountryArray[0];
          if (this.activeCountry.numberExample) {
            this.numberPlaceholder = this.activeCountry.numberExample;
          } else {
            this.numberPlaceholder = "Mobile Number";
          }
        }
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

    if(this.activeFlag) {
      var targetLi: any = document.getElementById(this.activeFlag);
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

    document.addEventListener("click", function (e) {
      var level = 0;
      for (var element = e.target; element; element = element.parentNode) {
        if (element.id === 'flagUl') {
          return;
        }else {
          if((element.id) == "mainDivId"){
            document.getElementById("flagUl").style.display = "block";
            return;
          }else {
            document.getElementById("flagUl").style.display = "none";
          }
        }
        level++;
      }
    });

  }

  validationCheckFn() {
    if (this.mobile && (/^\d+$/.test(this.mobile))) {
      const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
      const number = phoneUtil.parseAndKeepRawInput(this.mobile, this.activeCountry.countryCode);

      if (phoneUtil.isValidNumber(number)) {
        this.isValid = true;
        this.isInvalid = false;
      } else {
        this.isValid = false;
        this.isInvalid = true;
      }
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
    this.activeFlag = country.flag;
  }


}
