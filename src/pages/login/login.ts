import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserDataProvider } from '../../providers/user-data/user-data';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email_address: String;
  constructor(private loader: LoadingController, public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private user_data: UserDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {

    console.log(this.email_address);
    let loading = this.loader.create({
      content: 'Please wait...'
    });
    loading.present();
    this.user_data.getUserDetailsByEmail(this.email_address).then(
      (res: Array<any>) => {
        loading.dismiss();
        console.log("res" + JSON.stringify(res));
        this.storage.set('user_details', res).then((val) => {
          // Navigate to the next page();
          this.navCtrl.push("Tabs4UserPage");
        });

      },
      (err) => {
        console.log("err" + JSON.stringify(err))
        alert(err.message)
      }
    )

    // Or to get a key/value pair
    // this.storage.get('age')
  }

}
