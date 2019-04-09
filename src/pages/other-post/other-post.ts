import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';


/**
 * Generated class for the OtherPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other-post',
  templateUrl: 'other-post.html',
})
export class OtherPostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private storage: Storage, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPostPage');
  }

  logout(){
    this.storage.clear().then(()=>{
      console.log("Successfully ceared the local storage!")
      this.app.getRootNav().setRoot(LoginPage);
    },
    (e)=>{
      console.log('Unable to clear the storage!'+JSON.stringify(e))
    })
  }

}
