import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { GalleryPage } from '../pages/gallery/gallery';
import { ContactPage } from '../pages/contact/contact';
import { NewsPage } from '../pages/news/news';
import { ZctuBackgroundPage } from '../pages/zctu-background/zctu-background';
import { RegisterPage } from '../pages/register/register';
import { AffiliatesPage } from '../pages/affiliates/affiliates';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();    
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Affiliates', component: AffiliatesPage },     
      { title: 'About Us', component: ZctuBackgroundPage},
      { title: 'News', component: NewsPage },
      { title: 'Gallery', component: GalleryPage },
      { title: 'Contact', component: ContactPage },
      { title: 'Register', component: RegisterPage },
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
