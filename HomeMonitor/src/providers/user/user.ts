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

}
