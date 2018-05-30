import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


import { Storage } from '@ionic/storage';
import {AdProvider} from "../../../providers/ad/ad";
import {AdOrFlatsharingPage} from "../adOrFlatsharing/adOrFlatsharing";


/**
 * Generated class for the CreateAdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-create-ad',
  templateUrl: 'create-ad.html',
})
export class CreateAdPage {


  private form: FormGroup;
  private currentUser;

  constructor(public storage:Storage,public adProvider: AdProvider, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
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
      nbMaxRoomMates: ['', Validators.required],
      rent: ['', Validators.required],
      area: ['', Validators.required]
    });
  }

  formCreateAd() {
    this.adProvider.createAd(this.form.value,this.currentUser);
    this.navCtrl.push(AdOrFlatsharingPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAdPage');
  }

}
