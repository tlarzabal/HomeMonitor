import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Server} from "../../server/server";
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getAllkindOfTasks();
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
        server.createNewTask(task);
        server.assigneTask(task, name);
    }
    this.navCtrl.pop();
    this.navCtrl.push(TaskpagePage);


 }

}
