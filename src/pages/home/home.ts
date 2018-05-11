import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PhoneVerificationPage} from "../phone-verification/phone-verification";
import {ModalController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // logoImage : string = "../../assets/imgs/ZTtYkKtCSJulRyheRIxB_Special-request-512.png";
  logoImage: string = "../../assets/imgs/home.png";
  isListOpen: boolean;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  login() {
    console.log("yes");
    this.navCtrl.push(PhoneVerificationPage);
  }

  ionViewDidLoad() {
    this.isListOpen = false;
  }

  selectCountry() {
    this.isListOpen = !this.isListOpen;
  }

  chooseCountry(){
    this.isListOpen = !this.isListOpen;
  }

  public openModal() {

  }

  public closeModal() {

  }

}
