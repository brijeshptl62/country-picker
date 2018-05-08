import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  verification_id: any;
  otp: string = '';
  loading: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams) {
    this.verification_id = this.navParams.get('verificationid');
  }

  ionViewDidLoad() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    console.log('ionViewDidLoad OtpPage');
  }

  roleSelection() {
    this.loading.present();
    var signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verification_id, this.otp);
    firebase.auth().signInWithCredential(signInCredential).then((result)=> {
      console.log(result);
      setTimeout(()=> {
        // this.api.dismissLoader();
        // this.api.presentToast('OTP Verified');
        console.log('OTP Verified');
        this.loading.dismiss();
      }, 2000);
      // this.navCtrl.setRoot('RoleSelectionPage');
      }).catch(()=> {
      // this.api.dismissLoader();
      this.loading.dismiss();
      // this.api.presentSimplesAlert('OTP Failed','Failed to verify OTP');
      console.log('Erorr in OTP');
    });

  }
}
