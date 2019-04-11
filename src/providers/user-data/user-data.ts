import { Injectable } from '@angular/core';
import { RestServiceProvider } from '../rest-service/rest-service';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  constructor(private rest_service: RestServiceProvider) {
    console.log('Hello UserDataProvider Provider');
  }


  /**
   * Send a  request to users endpoint with the email data
   * the user entered on the form.
   */
  getUserDetailsByEmail(p_email_address: String) {
    return new Promise((resolve, reject) => {
      this.rest_service.get('users', { email: p_email_address })
        .subscribe((res: any) => {
          // If the API returned a successful response, return the user data;
          if (res && Array.isArray(res) && res.length > 0) {
            resolve(res[0]);
          } else {
            reject({ message: "User does not exist with the email id:" + p_email_address });
          }

        }, (err) => {
          console.error('ERROR', err);
          reject({ message: "Error occured while fetching the data" });
        });
    })
  }

}