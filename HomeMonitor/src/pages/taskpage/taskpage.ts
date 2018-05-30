import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import {Server} from "../../server/server";
import {Storage} from "@ionic/storage";
import {AdOrFlatsharingPage} from "../adOrFlatsharing/adOrFlatsharing";
import {TabsPage} from "../tabs/tabs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HobbiesPage} from "../hobbies/hobbies";

let server = new Server();

/**
 * Generated class for the TaskpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taskpage',
  templateUrl: 'taskpage.html',
})
export class TaskpagePage {

    private form : FormGroup;

      allkindOfTasks;
      tasktoBeAssigned;
      nameToBeAssigned;
        choice = 'all';
    private currentUser;
    taskOfCurrentuser;
    done;

  constructor(public storage:Storage, public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private formBuilder: FormBuilder) {
      this.done = new Array();
      this.getAllkindOfTasks();
      this.initDone();
      this.taskOfCurrentuser = new Array();

      this.storage.get("currentUser").then((data) => {
          if(data != null){
              this.currentUser = data;
          }
          else {
              console.log("NOT CONNECTED");
          }

      });

      this.form = this.formBuilder.group({
          tache: ['', Validators.required],
          membre: ['', Validators.required]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskpagePage');
  }

  getAllkindOfTasks(){
    var req = server.getAllKindOfTasks();
    let obj = JSON.parse(req.responseText);
    console.log(obj.kind);
    this.allkindOfTasks = obj.kind;
  }

  getTasksAssigned(task){
      var req = server.getTaskAssignee(task);
      let assig = JSON.parse(req.responseText).assignee;
      console.log(assig);
      return assig;
  }


  reqAssigneTask(task, name){
    if (task != "" && name != ""){
        console.log("ok");
        server.createNewTask(task);
        var req = server.assigneTask(task, name);

        if (req.status == 404){
            let toast = this.toastCtrl.create({
                message: "Tâche déjà assignée",
                duration: 5000,
                showCloseButton: true,
            });
            toast.present();
        }else{
            let toast = this.toastCtrl.create({
                message: "Tâche ajoutée",
                duration: 5000,
                showCloseButton: true,
            });
            toast.present();
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }

    }else {
        let toast = this.toastCtrl.create({
            message: "Champs incomplets",
            duration: 5000,
            showCloseButton: true,
        });
        toast.present();
    }

 }

    reqGetTaskofUser(user){
        var req = server.getTaskofUser(user);
        let obj = JSON.parse(req.responseText);
        console.log("longueur du tab :");
        console.log(obj);
        console.log(obj.result);
        this.taskOfCurrentuser = obj.result;
    }

    initDone(){
      for (var i=0; i<this.allkindOfTasks.length; i++){
          this.done.push({Task: this.allkindOfTasks[i], Value: false});
      }
    }

    reqDoTask(){
      this.done.forEach(function(element){
          if (element.Value){
              server.doTask(element.Task);
          }
      });
      this.navCtrl.setRoot(this.navCtrl.getActive().component);

    }

    logForm() {
        server.createNewTask(this.form.value['tache']);
        var req = server.assigneTask(this.form.value['tache'], this.form.value['membre']);
        if (req.status == 404) {
            let toast = this.toastCtrl.create({
                message: "Tâche déjà assignée",
                duration: 5000,
                showCloseButton: true,
            });
            toast.present();
        } else {
            let toast = this.toastCtrl.create({
                message: "Tâche ajoutée",
                duration: 5000,
                showCloseButton: true,
            });
            toast.present();
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }
    }
}