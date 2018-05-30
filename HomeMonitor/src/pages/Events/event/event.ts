import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CreateEventPage} from "../create-event/create-event";
import {EventProvider} from "../../../providers/event/event";
import {Observable} from "rxjs/Observable";
import {Socket} from 'ng-socket-io';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  listEvents;

  constructor(public socket: Socket,public eventProdiver: EventProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.getAllEvents();

    this.getNewEventList().subscribe(res => {
      this.listEvents = res["events"];
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }


  getAllEvents(){
    this.eventProdiver.getAllEvents().subscribe(res => {
      console.log('Réponse requete serveur : ');
      console.log(res);
      this.listEvents = res['events'];
      console.log('Liste events : ');
      console.log(this.listEvents);
    });
  }

  addEvent(){
    this.navCtrl.push(CreateEventPage);
  }

  getNewEventList() {
    let observable = new Observable(observer => {
      this.socket.on('addedEvent', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }


}
