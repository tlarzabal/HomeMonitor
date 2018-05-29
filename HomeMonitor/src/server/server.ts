/**
 * Created by thiba on 29/05/2018.
 */

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

  getUser(userName){
    var req = new XMLHttpRequest();
    req.open("GET", this.getAllPath().concat("/getUser/".concat(userName)), false);
    req.send(null);
    return req;
  }

  createUser(userName) {
    var req = new XMLHttpRequest();
    req.open("GET", this.getAllPath().concat("/createUser/Rabiot/Adrien/123/adrien.rabiot@fff.fr/03-04-1995/").concat(userName), false);
    req.send(null);
    return req;
  }
}
