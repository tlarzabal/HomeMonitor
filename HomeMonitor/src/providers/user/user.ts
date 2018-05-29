import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Server} from "../../server/server";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  public server;

  constructor(public http: HttpClient) {
    this.server = new Server();
  }




  createUser(userName,hobbies) {
    this.http.post(this.server.getAllPath().concat('/createUser'), {
      name: "Rabiot",
      firstname: "Adrien",
      password: "123",
      mail: "adrien.rabiot@fff.fr",
      birthday : "03-04-1995",
      pseudo : userName,
      hobbies : hobbies
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
