import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListAdsPage} from "../listAds/listAds";
import {CreateAdPage} from "../create-ad/create-ad";
import {TaskpagePage} from "../taskpage/taskpage";
import {ShoppingListPage} from "../shopping-list/shopping-list";

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

  flatsharing2(){
    this.navCtrl.push(ShoppingListPage);
  }

  addAd(){
    this.navCtrl.push(CreateAdPage);
  }

}
