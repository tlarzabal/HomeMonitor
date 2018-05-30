import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AdOrFlatsharingPage} from "../Ads/adOrFlatsharing/adOrFlatsharing";
import {UserProvider} from "../../providers/user/user";

import {TaskpagePage} from "../taskpage/taskpage";

@Component({
  selector: 'page-hobbies',
  templateUrl: 'hobbies.html'
})
export class HobbiesPage {
  names = [{ Name:'Animaux', Value:false},
    { Name:'Fumeur', Value:false},
    { Name:'Non-Fumeur', Value:false},
    { Name:'Fumeur', Value:false}];

  pseudo;

  constructor(public userProvider: UserProvider,public navCtrl: NavController,public navParams: NavParams) {
    this.pseudo =this.navParams.get('pseudo');
  }

  submit(){
    let data: string[]=[];
    this.names.forEach(function(element) {
      if(element.Value)
        data.push(element.Name);
    });
    this.userProvider.createUser(this.pseudo,data);
    this.navCtrl.push(AdOrFlatsharingPage);
  }
}
