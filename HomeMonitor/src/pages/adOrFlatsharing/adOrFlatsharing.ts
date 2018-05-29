import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListAdsPage} from "../listAds/listAds";
import {CreateAdPage} from "../create-ad/create-ad";
import {TaskpagePage} from "../taskpage/taskpage";

@Component({
  selector: 'page-adOrFlatsharing',
  templateUrl: 'adOrFlatsharing.html'
})
export class AdOrFlatsharingPage {

  hasFlatsharing=null;
  constructor(public navCtrl: NavController) {
  }

  listAds(){
    this.navCtrl.push(ListAdsPage);
  }

  flatsharing(){
      this.navCtrl.push(TaskpagePage);

  }

  addAd(){
    this.navCtrl.push(CreateAdPage);
  }

}
