import {Component, Output, EventEmitter, Input} from '@angular/core';
import {CountryServiceProvider} from "../../providers/country-service/country-service";

/**
 * Generated class for the FlagDropdownComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

const HTML_TEMPLATE = `
  <div class="flag-main-div">
    <ul class="country-list">
      <li class="country" *ngFor="let c of allCountries" #{{c.flag}} id="{{c.flag}}" (click)="chooseCountry(c)">
        <img [src]="c.flagImg" class="flag-scroll-img"><span class="country-span">{{c.name}}</span><span
        class="dial-code">{{c.dialCode}}</span>
      </li>
    </ul>
  </div>
`;

const CSS_STYLE = `
.flag-scroll-img {
    width: 2.2em;
    height: 1.4em;
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

  .country-span {
    padding: 0 5px;
  }

  .dial-code {
    opacity: 0.5;
  }
`;

@Component({
  selector: 'flag-dropdown',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLE]
})
export class FlagDropdownComponent {

  allCountries: any;
  selectedCountry: any;

  @Input('activeCountryData') activeCountryData;

  @Output() onSelectOption = new EventEmitter();

  constructor(public countryService: CountryServiceProvider) {
  }

  ngAfterViewInit() {

    this.getCountry();

    document.addEventListener("keydown", (zEvent) => {
      this.getCountryByKetdown(zEvent);
    });

    if (this.activeCountryData.activeFlag && this.activeCountryData.activeCountry) {
      setTimeout(() => {
        this.scrollTo("flag-icon-" + this.activeCountryData.activeCountry.countryCode.toLowerCase());
      }, 100);
    }
  }

  getCountryByKetdown(zEvent: any) {
    console.log(this.allCountries)
    var selectedCountry: any = [];
    for (var x in this.allCountries) {
      if ((((this.allCountries[x].name).substring(0, 1)) == (zEvent.key).toUpperCase())) {
        selectedCountry.push(this.allCountries[x].flag);
        break
      }
    }
    this.selectedCountry = selectedCountry;
    if (this.selectedCountry.length > 0) {
      var targetLi: any = document.getElementById(this.selectedCountry);
      if (targetLi) {
        targetLi.scrollIntoView(((targetLi.offsetTop) / 4) - 50);
      }
    }
  }

  getCountry() {
    this.countryService.getAllCountry().then(
      (success) => {
        this.allCountries = success;
      }).catch(
      (err) => {
        console.log(err);
      });
  }

  scrollTo(elementId: string) {
    var targetLi: any = document.getElementById(elementId);
    if (targetLi) {
      targetLi.scrollIntoView(((targetLi.offsetTop) / 4) - 50);
      targetLi.style.backgroundColor = "#eeee";
    }
  }

  chooseCountry(country) {
    this.onSelectOption.emit(country);
  }

}
