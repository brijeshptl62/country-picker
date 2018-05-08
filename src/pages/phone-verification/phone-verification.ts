import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {OtpPage} from '../otp/otp';
/**
 * Generated class for the PhoneVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-phone-verification',
  templateUrl: 'phone-verification.html',
})
export class PhoneVerificationPage {
  public recaptchaVerifier: firebase.auth.ApplicationVerifier;
  verificationId: any = '';
  phoneNumber: any = '';
  countryCode: any = '';
  loading: any;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    });
    console.log('ionViewDidLoad PhoneVerificationPage');
  }



  signIn(phoneNumber) {
    var provider = new firebase.auth.PhoneAuthProvider();
    provider.verifyPhoneNumber("+" + phoneNumber, this.recaptchaVerifier)
      .then((verificationId) => {
        console.log(verificationId);
        this.navCtrl.push(OtpPage, {verificationid: verificationId});
      }).catch((err) => {
      console.log(err);
    });
    console.log(phoneNumber);

  }


}
