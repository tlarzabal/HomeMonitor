import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Server} from "../../../server/server";
import { Storage } from '@ionic/storage';
import {AdOrFlatsharingPage} from "../adOrFlatsharing/adOrFlatsharing";
import {AdProvider} from "../../../providers/ad/ad";
let server = new Server();
@Component({
  selector: 'page-listAds',
  templateUrl: 'listAds.html'
})
export class ListAdsPage {

  private listAds;
  private currentUser;

  constructor(public storage:Storage,public adProvider: AdProvider, public navCtrl: NavController) {
    this.storage.get("currentUser").then((data) => {
      if(data != null){
        console.log("currentUser : "+ data);
        this.currentUser = data;
      }
      else {
        console.log("NOT CONNECTED");
      }

    });
  this.getListAds();
  console.log(this.listAds);
  }

  getListAds(){
    var req = server.getListAds();
    console.log(req);
    let obj = JSON.parse(req.responseText);
    this.listAds = obj.ads;
  }

  join(adTitle){
    console.log(adTitle);
    console.log(this.currentUser);
    this.adProvider.joinAd(adTitle,this.currentUser);
    this.navCtrl.push(AdOrFlatsharingPage);
  }

}
