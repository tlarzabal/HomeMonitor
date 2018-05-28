"use strict";

module.exports = class FlatSharing {

    constructor(ad) {
        this.chief = ad.getPublisher();
        this.ad = ad;
        this.roomMates = [chief];

    }

    addRoomMate(user){
        if(this.roomMates.length<this.ad.getNbMaxRoomMates()){
            this.roomMates.push(user);
        }
    }

}