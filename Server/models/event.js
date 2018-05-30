"use strict";

module.exports = class Event {

    constructor(title, idUserCreator, dateEvent, description, adress) {

        this.title = title;
        this.idUserCreator = idUserCreator;
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
        var index = this.participant.indexOf(idParticipant;
        if (index > -1) {
            this.participant.splice(index, idParticipant);
        }
    }

}



