import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PhoneVerificationPage} from "../phone-verification/phone-verification";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login()
  {
    console.log("yes");
    this.navCtrl.push(PhoneVerificationPage);
  }

}
