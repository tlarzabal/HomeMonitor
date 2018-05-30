import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Server} from "../../server/server";
let server = new Server();
@Component({
  selector: 'page-listAds',
  templateUrl: 'listAds.html'
})
export class ListAdsPage {

  listAds;
  constructor(public navCtrl: NavController) {
  this.getListAds();
  console.log(this.listAds);
  }

  getListAds(){
    var req = server.getListAds();
    let obj = JSON.parse(req.responseText);
    this.listAds = obj.ads;
  }


}
