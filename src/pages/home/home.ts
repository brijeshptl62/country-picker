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
  isListOpen: boolean;
  allCountries: any;
  activeFlag: string;
  activeCountry: Object;
  mobile: string;

  constructor(public navCtrl: NavController, public http: HttpClient, public countryService: CountryServiceProvider) {

  }

  login() {
    console.log(this.activeCountry);
    console.log(this.mobile);
    console.log(this.activeFlag);
    // this.navCtrl.push(PhoneVerificationPage);
  }

  ionViewDidLoad() {
    this.activeFlag = 'flag-icon-us';
    this.isListOpen = false;
    this.countryService.getAllCountry().then(
      (success) => {
        this.allCountries = success;
        console.log(this.allCountries);
        this.activeCountry = this.allCountries.filter((obj) => {
          return obj.flag === this.activeFlag;
        });
      }).catch(
      (err) => {
        console.log(err);
      });

  }

  selectCountry() {
    this.isListOpen = !this.isListOpen;
  }

  chooseCountry(country) {
    this.activeCountry = country;
    this.isListOpen = !this.isListOpen;
    this.activeFlag = country.flag;
  }


}
