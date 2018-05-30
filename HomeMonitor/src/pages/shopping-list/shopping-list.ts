import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Server} from "../../server/server";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Storage} from "@ionic/storage";
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
  private form : FormGroup;

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
    let obj = JSON.parse(req.responseText);
    console.log(obj.item);
    this.items = obj.item;
  }

  addItem() {
    var req = server.addShoppingListItem(this.form.value['item']);
    let obj = JSON.parse(req.responseText);
    console.log(obj.item);
    this.items = obj.item;
    this.form.reset()
  }

  constructor(public storage: Storage ,public navCtrl: NavController, private formBuilder: FormBuilder ) {
    this.getItems();
    this.form = this.formBuilder.group({
      item: ['', Validators.required]
    });
  }

}
