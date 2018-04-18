import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { WriterPage } from '../pages/writer/writer';
import { SkillsPage } from '../pages/skills/skills';
import { ExperiencePage } from '../pages/experience/experience';
import { EducationPage } from '../pages/education/education';
import { ContactPage } from '../pages/contact/contact';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  profilePic;
  profileName;
  constructor(
    public platform: Platform,
    public events: Events, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
       //Listens for an event while the user logs in
       events.subscribe('profile', () => {
        this.appendUserProfile()
      });

      
   //CHECK CURRENT USER
   if ( localStorage.getItem('Loggedin')=="true" ){
    this.rootPage = ProfilePage; 
  } else { 
    this.rootPage = HomePage;  
  }

    this.initializeApp();
     //SET NAME, AVATAR AND SCORE
     if(localStorage.getItem('name')){
      this.profileName= localStorage.getItem('name');
      this.profilePic=localStorage.getItem('avatar');
    }
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage },
      { title: 'PROFILE', component: ProfilePage },
      { title: 'SKILL SET', component: SkillsPage },
      { title: 'CAREER AS A WRITER', component: WriterPage },
      { title: 'EDUCATION AND TRAINING', component: EducationPage },
      { title: 'WORKING EXPERIENCE', component: ExperiencePage },
      { title: 'CONTACT', component: ContactPage },
      { title: 'LOGOUT', component: 'logout' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if( typeof page.component == 'string' ){
      localStorage.clear()
      this.nav.setRoot(HomePage);
    }else{
      this.nav.push(page.component);
    }
  }
//SET NAME, AVATAR AND SCORE
appendUserProfile(){
 this.profileName= localStorage.getItem('name');
 this.profilePic=localStorage.getItem('avatar')
}
}
