import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { PostDataProvider } from '../../providers/post-data/post-data';


/**
 * Generated class for the UserPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-post',
  templateUrl: 'user-post.html',
})
export class UserPostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private post_data: PostDataProvider, private storage: Storage,  private app: App) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad UserPostPage');
    this.post_data.getPosts().then((res)=>{
      console.log("============posts=============>"+res);
    },
    (err)=>{
      console.log("********************>"+err);
    })
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
