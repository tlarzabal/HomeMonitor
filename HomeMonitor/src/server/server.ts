/**
 * Created by thiba on 29/05/2018.
 */
import {flattenStyles} from "@angular/platform-browser/src/dom/dom_renderer";

export class Server {

  path : string;
  port: string;

  constructor() {
    this.path ="http://localhost:";
    this.port = "8080";
  }

  getAllPath(){
    return this.path.concat(this.port);
  }

  getUser(idUser){
    var req = new XMLHttpRequest();
    req.open("GET", this.getAllPath().concat("/getUser/".concat(idUser)), false);
    req.send(null);
    return req;
  }

  createUser(userName) {
    var req = new XMLHttpRequest();
    req.open("GET", this.getAllPath().concat("/createUser/Rabiot/Adrien/123/adrien.rabiot@fff.fr/03-04-1995/").concat(userName), false);
    req.send(null);
    return req;
  }

  createNewTask(task){
      var req = new XMLHttpRequest();
      req.open("GET", this.getAllPath().concat("/createNewTask/").concat(task),false);
      req.send(null);
      return req;
  }
  getAllKindOfTasks(){
      var req = new XMLHttpRequest();
      req.open("GET",this.getAllPath().concat("/getAllKindOfTasks"), false);
      req.send(null);
      return req;
  }


  getListAds(){
    var req = new XMLHttpRequest();
    req.open("GET",this.getAllPath().concat("/getAllAds"), false);
    req.send(null);
    return req;
  }

  getTaskAssignee(task){
    var req = new XMLHttpRequest();
    req.open("GET", this.getAllPath().concat("/getTaskAssignee/").concat(task),false);
    req.send(null);
    return req;
  }

  doTask(task){
    var req = new XMLHttpRequest();
    req.open("GET", this.getAllPath().concat("/doTask/").concat(task), false);
    req.send(null);
    return req;
  }

  assigneTask(task, name){
    var req = new XMLHttpRequest();
    req.open("GET", this.getAllPath().concat("/assigneTask/").concat(task).concat("/").concat(name),false);
    req.send(null);
    return req;
  }

  getShoppingListItems(){
    var req = new XMLHttpRequest();
    req.open("GET", this.getAllPath().concat("/getItems"), false);
    req.send(null);
    return req;
  }

  deleteShoppingListItem(name){
    var req = new XMLHttpRequest();
    req.open("GET", this.getAllPath().concat("/deleteItems/").concat(name),false);
    req.send(null);
    return req;
  }


}
