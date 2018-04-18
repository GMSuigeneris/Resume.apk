import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WriterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-writer',
  templateUrl: 'writer.html',
})
export class WriterPage {
  imageArray:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imageArray=[
      {'image':'assets/imgs/two.jpg' },
      {'image':'assets/imgs/three.jpg' },
      {'image':'assets/imgs/suigeneris.jpg' },
      {'image':'assets/imgs/six.jpg' },
      {'image':'assets/imgs/seven.jpg' },
      {'image':'assets/imgs/one.jpg' },
      {'image':'assets/imgs/four.jpg' },
      {'image':'assets/imgs/five.jpg' },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WriterPage');
  }

}
