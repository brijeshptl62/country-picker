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

  .flag-main-div {
    top: 30px;
    bottom: 30px;
    left: 30px;
    right: 30px;
    position: fixed;
    width: auto;
    z-index: 2;
  }

  .country-list {
    max-height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2;
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 0 0 0 -1px;
    -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    background-color: white;
    border: 1px solid #CCC;
    white-space: normal;
    overflow-y: scroll;
  }

  .country {
    padding: 10px 10px;
    line-height: 1.5em;
  }

  .flag-div {
    width: 19%;
    height: 40px;
    //border-top-left-radius: 2px;
    //border-bottom-left-radius: 2px;
    position: absolute;
    background: white;
    border: 1px solid #D2D2D2;
  }

  .phone-input {
    margin-left: 20%;
    width: 80%;
    padding-left: 3%;
    //border-top-right-radius: 2px;
    height: 40px;
    //border-bottom-right-radius: 2px;
    //border: none;
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

  .country-span {
    padding: 0 5px;
  }

  .btn-login {
    color: white;
    border-color: white;
    background-color: #006DCC;
  }

  .dial-code {
    opacity: 0.5;
  }

  .error-div
  {
    font-weight: bold;
    font-size: 1.5rem;
    padding-top: 10px;
  }

  #error-msg {
    color: #FF3D00;
  }

  #valid-msg {
    color: #00C900;
  }

  .margin-0 {
    margin: 0px !important;
  }
`;

const HTML_TEMPLATE = `
<div class="flag-main-div" *ngIf="isListOpen">
    <ul class="country-list">
      <li class="country" *ngFor="let c of allCountries" #{{c.flag}} id="{{c.flag}}" (click)="chooseCountry(c)">
        <img [src]="c.flagImg" class="flag-scroll-img"><span class="country-span">{{c.name}}</span><span
        class="dial-code">{{c.dialCode}}</span>
      </li>
    </ul>
  </div>

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
  // templateUrl: 'select-country.html',
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
  selectedCountry: any = [];
  numberPlaceholder: any;


  constructor(public navCtrl: NavController, public http: HttpClient, public countryService: CountryServiceProvider) {
    this.isListOpen = false;
  }

  ngAfterViewInit() {

    var self: any = this;

    this.countryService.getAllCountry().then(
      (success) => {
        self.allCountries = success;
      }).catch(
      (err) => {
        console.log(err);
      });

    if (this.isGeoIpLookup != false) {
      this.countryService.getUserCountry().then(
        (success) => {
          self.activeFlag = success.activeFlag;
          this.activeCountry = success.activeCountry;

          if ((success.numberPlaceholder) && this.isPlaceholder != false) {
            this.numberPlaceholder = success.numberPlaceholder;
          } else {
            this.numberPlaceholder = "Mobile Number";
          }

        }).catch(
          (err) => {
            console.log(err);
            self.activeFlag = 'http://www.geonames.org/flags/x/us.gif';
          });
    }

    if (!this.activeFlag) {
      this.countryService.getDefaultCountry().then(
        (success) => {
          this.activeFlag = success.activeFlag;
          this.activeCountry = success.activeCountry;
          if ((this.activeCountry.numberExample) && this.isPlaceholder != false) {
            this.numberPlaceholder = this.activeCountry.numberExample;
          } else {
            this.numberPlaceholder = "Mobile Number";
          }
        }).catch(
        (err) => {
          console.log(err);
          this.activeFlag = 'http://www.geonames.org/flags/x/us.gif';
        });
    }
  }

  selectCountry() {
    this.isListOpen = true;
    this.mobile = null;

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
        if (targetLi) {
          targetLi.scrollIntoView(((targetLi.offsetTop) / 4) - 50);
        }
      }
    });

    if (this.activeFlag && this.activeCountry) {
      setTimeout(() => {
        this.scrollTo("flag-icon-" + this.activeCountry.countryCode.toLowerCase());
      }, 100);
    }

  }

  scrollTo(elementId: string) {
    var targetLi: any = document.getElementById(elementId);
    if (targetLi) {
      targetLi.scrollIntoView(((targetLi.offsetTop) / 4) - 50);
      targetLi.style.backgroundColor = "#eeee";
    }
  }

  validationCheckFn(mobile: any) {
    if (mobile && (/^\d+$/.test(mobile))) {
      const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
      const number = phoneUtil.parseAndKeepRawInput(mobile, this.activeCountry.countryCode);

      if (phoneUtil.isValidNumber(number)) {
        let mobileObj = {mobile: mobile, isValid: "true"};
        this.onSelectNumber.emit(mobileObj)
      } else {
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
