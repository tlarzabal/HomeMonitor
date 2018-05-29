import { Component } from '@angular/core';
import { HobbiesPage } from '../hobbies/hobbies';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

import { NavController } from 'ionic-angular';

import {Server} from "../../server/server";
import {AdOrFlatsharingPage} from "../adOrFlatsharing/adOrFlatsharing";

let server = new Server();

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  private form : FormGroup;

  logForm() {

    var req = server.getUser(this.form.value['pseudo']);
    console.log(req.status);
    if (req.status === 200) {
      this.navCtrl.push(AdOrFlatsharingPage);
    }
    else {
      let data: string[]=[];
    data['pseudo'] = this.form.value['pseudo'];
      this.navCtrl.push(HobbiesPage,data);
    }
  }

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      pseudo: ['', Validators.required]
    });
  }

}
