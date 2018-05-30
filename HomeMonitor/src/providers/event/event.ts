import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Server} from "../../server/server";

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  public server;

  constructor(public http: HttpClient) {
    this.server = new Server();
  }


  createEvent(value,currentUser) {
    console.log(value);
    this.http.post(this.server.getAllPath().concat('/createEvent/').concat(currentUser), {
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
