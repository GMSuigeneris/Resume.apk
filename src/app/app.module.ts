import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import firebase from 'firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular/util/events';
import { ProfilePage } from '../pages/profile/profile';
import { ExperiencePage } from '../pages/experience/experience';
import { EducationPage } from '../pages/education/education';
import { ContactPage } from '../pages/contact/contact';
import { WriterPage } from '../pages/writer/writer';
import { SkillsPage } from '../pages/skills/skills';

var config = {
    apiKey: "AIzaSyBtexWliSFiHCOTqTbFTFLFrHSRvtsvkGM",
    authDomain: "legacytechlab-36582.firebaseapp.com",
    databaseURL: "https://legacytechlab-36582.firebaseio.com",
    projectId: "legacytechlab-36582",
    storageBucket: "legacytechlab-36582.appspot.com",
    messagingSenderId: "530568623842"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    ExperiencePage,
    EducationPage,
    ContactPage,
    WriterPage,
    SkillsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    ExperiencePage,
    EducationPage,
    ContactPage,
    WriterPage,
    SkillsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Events
  ]
})
export class AppModule {}
