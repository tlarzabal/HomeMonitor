import { Component } from '@angular/core';
import { HobbiesPage } from '../hobbies/hobbies';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { NavController } from 'ionic-angular';
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  private todo : FormGroup;
  logForm() {
    //console.log(this.todo.value);
    //if not user
    var req = new XMLHttpRequest();
    req.open("GET", "http://localhost:8080/getUser/".concat(this.todo.pseudo), false);
    req.send(null);
    console.log(req.status);
    if (req.status === 200)
      this.navCtrl.push(ContactPage);
    else {
      req.open("GET", "http://localhost:8080/createUser/Rabiot/Adrien/123/adrien.rabiot@fff.fr/03-04-1995/".concat(this.todo.pseudo), false);
      req.send(null);
      console.log(req.status);
      this.navCtrl.push(HobbiesPage);
    }
    //if user connexion direct
  }

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder ) {
    this.todo = this.formBuilder.group({
      pseudo: ['', Validators.required]
    });
  }

}
