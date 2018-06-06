import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from 'firebase';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('form') form;
  user = {} as User;

  constructor(private alert: AlertController, private angularFireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

  }

  async login() {    
    try {
      const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(this.form.username, this.form.password);      
      if (result) {
        this.navCtrl.push(HomePage);
      }
    }
    catch (e) {
      this.presentAlert("Notification", e);
    }
  }

  register() {
    this.navCtrl.setRoot(RegisterPage);
  }

  presentAlert(title, message) {
    let alert = this.alert.create({
      title: title,
      subTitle: "<br>" + message,
      buttons: ['OK']
    });
    alert.present();
  }

}
