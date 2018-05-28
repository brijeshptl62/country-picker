import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mobile: any;

  constructor(public navCtrl: NavController) {

  }

  getNumber(ev: any){
    console.log(ev)
  }

  getCountry(ev: any){
    console.log(ev)
  }


}
