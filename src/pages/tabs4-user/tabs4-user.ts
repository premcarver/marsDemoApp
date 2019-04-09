import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { UserPostPage } from '../user-post/user-post';
// import { OtherPostPage } from '../other-post/other-post';

/**
 * Generated class for the Tabs4UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs4-user',
  templateUrl: 'tabs4-user.html',
})
export class Tabs4UserPage {
  
  tab1Root = "UserPostPage";
  tab2Root = "OtherPostPage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs4UserPage');
  }

}
