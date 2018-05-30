import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Server} from "../../server/server";

/*
  Generated class for the AdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdProvider {

  public server;

  constructor(public http: HttpClient) {
    this.server = new Server();
  }


  createAd(value,currentUser) {
    console.log(value);
    this.http.post(this.server.getAllPath().concat('/createAd/').concat(currentUser), {
      //title: this.form.value['title'],
      //description: this.form.value['description']
      value: value
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}
