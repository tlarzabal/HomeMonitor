import { Component } from '@angular/core';
import { HobbiesPage } from '../hobbies/hobbies';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  private todo : FormGroup;
  logForm() {
    //console.log(this.todo.value);
    //if not user
    this.navCtrl.push(HobbiesPage);
    //if user connexion direct
  }

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder ) {
    this.todo = this.formBuilder.group({
      pseudo: ['', Validators.required]
    });
  }


}
