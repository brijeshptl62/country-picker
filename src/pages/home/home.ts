import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mobile: any;
  
  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  getNumber(ev: any){
    console.log(ev)
  }

  getCountry(ev: any){
    console.log(ev)
  }


}
