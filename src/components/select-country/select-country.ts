import {Component, Output, EventEmitter, Input} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {CountryServiceProvider} from "../../providers/country-service/country-service";

/**
 * Generated class for the SelectCountryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
const CSS_STYLE = `
  .flag-scroll-img {
    width: 2.2em;
    height: 1.4em;
  }

  .input-block {
    position: relative;
  }

  .flag-div {
    width: 19%;
    height: 40px;
    position: absolute;
    background: white;
    border: 1px solid #D2D2D2;
  }

  .phone-input {
    margin-left: 20%;
    width: 80%;
    padding-left: 3%;
    height: 40px;
    border: 1px solid #D2D2D2;
  }

  .active-flag {
    height: inherit;
  }

  .flag-arrow {
    position: absolute;
    top: 50%;
    margin-top: -6px;
    left: 75%;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid #555;
  }
  
  .padding-9 {
    padding: 10px;
  }

  .margin-0 {
    margin: 0px !important;
  }
`;

const HTML_TEMPLATE = `
  <flag-dropdown (onSelectOption)="chooseCountry($event)" *ngIf="isListOpen" [activeCountryData]="activeCountryData"></flag-dropdown>

    <!--main div-->
    <div class="full-width input-block" padding id="mainDivId">

      <!--flag container-->
      <div class="flag-div" (click)="selectCountry()">

        <!--selected flag-->
        <div class="active-flag padding-9">
          <img [src]="activeFlag" class="flag-scroll-img">
          <div class="flag-arrow"></div>
        </div>

      </div>
      <!--phone input-->
      <input class="phone-input" name="phone" [(ngModel)]="mobile" placeholder="{{numberPlaceholder}}" type="tel"
             #phone="ngModel" autocomplete="off" (blur)="validationCheckFn(mobile)" >

    </div>
`;


@Component({
  selector: 'select-country',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class SelectCountryComponent {

  @Input('isPlaceholder') isPlaceholder;
  @Input('isGeoIpLookup') isGeoIpLookup;

  @Output() onSelectNumber = new EventEmitter();
  @Output() onSelectCountry = new EventEmitter();
  isListOpen: boolean;
  allCountries: any;
  activeFlag: string;
  activeCountry: any;
  mobile: string;
  numberPlaceholder: any;
  activeCountryData: any;


  constructor(public navCtrl: NavController, public http: HttpClient, public countryService: CountryServiceProvider) {
    this.isListOpen = false;
  }

  ngAfterViewInit() {
    this.getAllCountrys();

    if (this.isGeoIpLookup != false) {
      this.getUserCurrentCountry();
    }

    if (!this.activeFlag) {
      this.getUserDefaultCountry();
    }
  }

  getAllCountrys() {
    this.countryService.getAllCountry().then(
      (success) => {
        this.allCountries = success;
      }).catch(
      (err) => {
        console.log(err);
      });
  }

  getUserCurrentCountry() {
    this.countryService.getUserCountry().then(
      (success) => {
        this.activeFlag = success.activeFlag;
        this.activeCountry = success.activeCountry;

        if ((success.numberPlaceholder) && this.isPlaceholder != false) {
          this.numberPlaceholder = success.numberPlaceholder;
        } else {
          this.numberPlaceholder = "Mobile Number";
        }

      }).catch(
      (err) => {
        console.log(err);
        this.activeFlag = CountryServiceProvider.defaultCountry;
      });
  }

  getUserDefaultCountry() {
    this.countryService.getDefaultCountry().then(
      (success) => {
        var activeCountry: any = success;
        this.activeFlag = activeCountry.activeFlag;
        this.activeCountry = activeCountry.activeCountry;
        if ((this.activeCountry.numberExample) && this.isPlaceholder != false) {
          this.numberPlaceholder = this.activeCountry.numberExample;
        } else {
          this.numberPlaceholder = "Mobile Number";
        }
      }).catch(
      (err) => {
        console.log(err);
        this.activeFlag = CountryServiceProvider.defaultCountry;
      });
  }

  selectCountry() {
    this.isListOpen = true;
    this.mobile = null;
    this.activeCountryData = {activeFlag: this.activeFlag, activeCountry: this.activeCountry};
  }

  scrollTo(elementId: string) {
    var targetLi: any = document.getElementById(elementId);
    if (targetLi) {
      targetLi.scrollIntoView(((targetLi.offsetTop) / 4) - 50);
      targetLi.style.backgroundColor = "#eeee";
    }
  }

  validationCheckFn(mobile: any) {
    if (mobile && (/^\d+$/.test(mobile)) && ((mobile.length) < 18)) {

      try {
        const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
        const number = phoneUtil.parseAndKeepRawInput(mobile, this.activeCountry.countryCode);

        if (phoneUtil.isValidNumber(number)) {
          let mobileObj = {mobile: mobile, isValid: "true"};
          this.onSelectNumber.emit(mobileObj)
        } else {
          let mobileObj = {mobile: mobile, isValid: "false"};
          this.onSelectNumber.emit(mobileObj)
        }
      }
      catch (error) {
        let mobileObj = {mobile: mobile, isValid: "false"};
        this.onSelectNumber.emit(mobileObj)
      }

    } else {
      let mobileObj = {mobile: mobile, isValid: "false"};
      this.onSelectNumber.emit(mobileObj)
    }
  }

  chooseCountry(country) {
    this.onSelectCountry.emit(country);
    this.isListOpen = false;
    this.activeCountry = country;
    if (this.activeCountry.numberExample && this.isPlaceholder != false) {
      this.numberPlaceholder = this.activeCountry.numberExample;
    } else {
      this.numberPlaceholder = "Mobile Number";
    }
    this.activeFlag = country.flagImg;
  }
}
