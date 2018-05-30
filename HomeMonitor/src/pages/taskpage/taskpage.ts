import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import {Server} from "../../server/server";
import {Storage} from "@ionic/storage";

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

      allkindOfTasks;
      tasktoBeAssigned;
      nameToBeAssigned;
        choice = 'all';
    private currentUser;
    taskOfCurrentuser;

  constructor(public storage:Storage, public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.getAllkindOfTasks();
      this.taskOfCurrentuser = new Array();

      this.storage.get("currentUser").then((data) => {
          if(data != null){
              this.currentUser = data;
          }
          else {
              console.log("NOT CONNECTED");
          }

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

  submit(){
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
            this.navCtrl.push(TaskpagePage);
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

}