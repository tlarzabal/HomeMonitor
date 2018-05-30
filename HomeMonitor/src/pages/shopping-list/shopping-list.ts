import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Server} from "../../server/server";
let server = new Server();

/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  items;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
  }

  getItems(){
    var req = server.getShoppingListItems();
    let obj = JSON.parse(req.responseText);
    console.log(obj.item);
    this.items = obj.item;
  }

  deleteItem(name){
    var req = server.deleteShoppingListItem(name);
    console.log(req.responseText)
    let obj = JSON.parse(req.responseText);
    console.log(obj.item);
    this.items = obj.item;
  }

}
