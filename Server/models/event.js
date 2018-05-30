"use strict";

module.exports = class Event {

    constructor(idUserCreator,title, dateEvent, description, adress) {

        this.idUserCreator = idUserCreator;
        this.title = title;
        this.dateEvent = dateEvent;
        this.creationDate = Date.now();
        this.description = description;
        this.adress = adress;

        this.participant = new Array();
    }


    addParticipant(idNewParticipant){
        if(this.participant.findIndex(i => i === idNewParticipant) == -1){
            this.participant.push(idNewParticipant);
        }
    }

    removeParticipant(idParticipant){
        var index = this.participant.indexOf(idParticipant);
        if (index > -1) {
            this.participant.splice(index, idParticipant);
        }
    }

}



