import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestServiceProvider } from '../rest-service/rest-service';
import { Storage } from '@ionic/storage';


/*
  Generated class for the PostDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostDataProvider {

  constructor(public http: HttpClient, private storage: Storage, private rest_service: RestServiceProvider) {
    console.log('Hello PostDataProvider Provider');
  }

  getPosts() {
    return new Promise((resolve, reject) => {
      this.storage.get("posts").then((local_posts) => {
        if (!local_posts) {
          this.rest_service.get('posts', {})
            .subscribe((res: any) => {
              console.log("Fetching posts from server:" + JSON.stringify(res));
              if (res && Array.isArray(res) && res.length > 0) {
                this.storage.set("posts", res);
                resolve(res);
              } else {
                reject({ message: "Posts does not exist! " });
              }
            });
        } else {
          resolve(local_posts)
        }
      }, (err) => {
        reject({ message: "Error reading local data!" })
      });
    });
  }

}
