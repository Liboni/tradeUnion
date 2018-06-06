import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private toast: ToastController,private angularFireAuth: AngularFireAuth,public navCtrl: NavController) {
  }
 
  ionViewDidLoad() {
    this.angularFireAuth.authState.subscribe(data=>{
      if(data.email && data.uid){
        this.toast.create({
          message:'Welcome to Trade Union, '+data.email,
          duration:3000
        }).present();
      }
      else{
        this.toast.create({
          message:'Could not find the authentication details',
          duration:3000
        }).present();
      }
     
    });
  }

}
