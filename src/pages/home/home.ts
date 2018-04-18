import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ToastController } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  imageArray:any=[];
  loading: Loading //loading controller
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fire: AngularFireAuth,
    private toast: ToastController,
    public loadingCtrl: LoadingController,
    private events: Events){

      this.imageArray=[
        {'image':'assets/imgs/two.jpg','quote':'Whatever you can do without confidence, you can do better with confidence' },
        {'image':'assets/imgs/three.jpg','quote':'Each minute you spend stuck in the past or lost in the future is each exact minute you take away from the present not planning for the future.' },
        {'image':'assets/imgs/suigeneris.jpg','quote':'  Reflect on your past mistakes but never let them reflect on you' },
        {'image':'assets/imgs/six.jpg','quote':'We have problems only when we see them as such' },
        {'image':'assets/imgs/seven.jpg','quote':'The moment you start thinking that others should think the way you think was the moment you stopped thinking' },
        {'image':'assets/imgs/one.jpg','quote':' Whenever knowledge seems unobtainable... seek to make new ones available' },
        {'image':'assets/imgs/four.jpg','quote':'It’s more probable that you will find meaning in a book you want to read rather than when you simply want a book to read.' },
        {'image':'assets/imgs/five.jpg','quote':'Do not get caught up in another’s purpose except you did so purposely towards achieving your own purpose in life' },
      ]

  }


  getArticles(){
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function (){
      if (this.readyState === 4 && this.status === 200){
        alert(this.responseText);
      }
    });
    xhr.open("GET", "http://larticles.org/api/articles");
    xhr.setRequestHeader("content-type", "application/json");
    //xhr.setRequestHeader("Authorization", "Basic cmVhbGpheTpaYkhNVEt6Z0RPZ1h2eXplYVk1VyBFNnR3"); 
    xhr.send();
  }
  
  login(provider){
    var signInProvider=null;
    switch(provider){
      case "facebook":
        signInProvider=new firebase.auth.FacebookAuthProvider();
      break;
      case "twitter":
        signInProvider=new firebase.auth.TwitterAuthProvider();
      break;
      case "google":
        signInProvider= new firebase.auth.GoogleAuthProvider();
      break;
    }
    
    firebase.auth().signInWithRedirect(signInProvider).then((result) => {
     firebase.auth().getRedirectResult().then( result => {
        console.log(result);
        this.events.publish('profile');
        localStorage.setItem('avatar',result.user.photoURL);
        localStorage.setItem('name',result.user.displayName);
        localStorage.setItem("Loggedin","true");
        this.navCtrl.push('Profile');
        })
          }).catch(err=>{
            console.log(err);
          });
    }  
      
      presentLoading() {
         this.loading = this.loadingCtrl.create({
          content: 'Please wait...',
          spinner:"bubbles"
        });
        this.loading.present();
      }
      //A toast to create an error message
      createToast(){
        this.toast.create({
          message: 'An error occured! try again',
          duration: 5000
        }).present();
      }
}
