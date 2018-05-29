import { Component } from '@angular/core';
import { HobbiesPage } from '../hobbies/hobbies';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

import { NavController } from 'ionic-angular';
import {ContactPage} from "../contact/contact";

import {Server} from "../../server/server";

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
    if (req.status === 200)
      this.navCtrl.push(ContactPage);
    else {
      req = server.createUser(this.form.value['pseudo']);
      console.log(req.status);
      this.navCtrl.push(HobbiesPage);
    }
  }

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder ) {
    this.form = this.formBuilder.group({
      pseudo: ['', Validators.required]
    });
  }

}
