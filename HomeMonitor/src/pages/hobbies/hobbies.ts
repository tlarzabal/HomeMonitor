import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-hobbies',
  templateUrl: 'hobbies.html'
})
export class HobbiesPage {
  names = [{ Name:'Animaux', Value:false},
    { Name:'Fumeur', Value:false},
    { Name:'Non-Fumeur', Value:false},
    { Name:'Fumeur', Value:false}];

  constructor(public navCtrl: NavController) {

  }

  submit(){
    this.navCtrl.push(ContactPage);
  }
}
