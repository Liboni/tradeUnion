import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsPageModule } from '../pages/news/news.module';
import { ContactPageModule } from '../pages/contact/contact.module';
import { EventsPageModule } from '../pages/events/events.module';
import { AffiliatesPageModule } from '../pages/affiliates/affiliates.module';
import { LoginPageModule } from '../pages/login/login.module';
import { LoginPage } from '../pages/login/login';
import { EventsPage } from '../pages/events/events';
import { ContactPage } from '../pages/contact/contact';
import { AffiliatesPage } from '../pages/affiliates/affiliates';
import { MiningPage } from '../pages/mining/mining';
import { GalleryPage } from '../pages/gallery/gallery';
import { InformationAndTechnologyPage } from '../pages/information-and-technology/information-and-technology';
import { JoinTradeUnionPage } from '../pages/join-trade-union/join-trade-union';
import { RegisterPage } from '../pages/register/register';
import { TourismPage } from '../pages/tourism/tourism';
import { ZctuBackgroundPage } from '../pages/zctu-background/zctu-background';
import { HealthCarePage } from '../pages/health-care/health-care';
import { EducationPage } from '../pages/education/education';
import { EducationPageModule } from '../pages/education/education.module';
import { GalleryPageModule } from '../pages/gallery/gallery.module';
import { HealthCarePageModule } from '../pages/health-care/health-care.module';
import { InformationAndTechnologyPageModule } from '../pages/information-and-technology/information-and-technology.module';
import { JoinTradeUnionPageModule } from '../pages/join-trade-union/join-trade-union.module';
import { MiningPageModule } from '../pages/mining/mining.module';
import { TourismPageModule } from '../pages/tourism/tourism.module';
import { ZctuBackgroundPageModule } from '../pages/zctu-background/zctu-background.module';
import { CareersSupportedPageModule } from '../pages/careers-supported/careers-supported.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { AngularFireModule } from 'angularfire2'
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    NewsPageModule,
    ContactPageModule,
    EventsPageModule,
    AffiliatesPageModule,
    EducationPageModule,
    GalleryPageModule,
    HealthCarePageModule,
    InformationAndTechnologyPageModule,
    JoinTradeUnionPageModule,
    MiningPageModule,
    TourismPageModule,
    ZctuBackgroundPageModule,
    CareersSupportedPageModule,
    RegisterPageModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    EventsPage,
    ContactPage,
    AffiliatesPage,
    MiningPage,
    GalleryPage,
    InformationAndTechnologyPage,
    JoinTradeUnionPage,
    RegisterPage,
    TourismPage,
    ZctuBackgroundPage,
    HealthCarePage,
    EducationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
