import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth'
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {} as User;

  constructor(private alert: AlertController, private angularFireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user) {   
      try {
      await this.angularFireAuth.auth.createUserWithEmailAndPassword(user.username, user.password);
      this.presentConfirm("Notification", "Registration successful, proceed to login.");
    }
    catch (e) {
      this.presentAlert("Notification", e);
    }
  }

  presentAlert(title, message) {
    let alert = this.alert.create({
      title: title,
      subTitle: "<br>" + message,
      buttons: ['OK']
    });
    alert.present();
  }
  presentConfirm(title, message) {
    let alert = this.alert.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

  login() {
    this.navCtrl.setRoot(LoginPage);
  }
}
