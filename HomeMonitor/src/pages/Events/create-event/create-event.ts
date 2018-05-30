import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EventProvider} from "../../../providers/event/event";
import {AdOrFlatsharingPage} from "../../adOrFlatsharing/adOrFlatsharing";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {

  currentUser;
  private form: FormGroup;

  constructor(public eventProvider: EventProvider,public formBuilder: FormBuilder,public storage: Storage,public navCtrl: NavController, public navParams: NavParams) {

    this.storage.get("currentUser").then((data) => {
      if(data != null){
        console.log("currentUser : "+ data);
        this.currentUser = data;
      }
      else {
        console.log("NOT CONNECTED");
      }
    });

    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      adress: ['', Validators.required],
      description: ['', Validators.required],
      dateEvent: ['', Validators.required]
    });

  }
  createEvent(){
    console.log(this.form.value);
      //this.eventProvider.createEvent(this.form.value,this.currentUser);
      this.navCtrl.pop();
  }


}
