import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CreateAdPage} from "../create-ad/create-ad";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  createAd(){
    this.navCtrl.push(CreateAdPage);
  }

}
