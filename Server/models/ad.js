"use strict";

module.exports = class Ad {

    constructor(idPublisher,title,rent,nbMaxRoomMates,area,description,adress) {
        this.title = title;
        this.rent = rent;
        this.nbMaxRoomMates = nbMaxRoomMates;
        this.idPublisher= idPublisher;
        this.area = area;
        this.description = description;
        this.adress = adress;
        this.isPublished=true;
        this.demandsId = [];
        this.roomMatesId = [];
    }

    getTitle() {
        return this.title;
    }

    getIsPublished() {
        return this.isPublished;
    }

    getIDPublisher() {
        return this.idPublisher;
    }

    getRent(){
        return this.rent;
    }
    getNbMaxRoomMates() {
        return this.nbMaxRoomMates;
    }
    getArea() {
        return this.area;
    }
    getDescription() {
        return this.description;
    }
    getAdress(){
        return this.adress;
    }
    pushDemand(userId){
        this.demandsId.push(userId);
    }
    pushRoomMates(userId){
        this.roomMatesId.push(userId);
    }
}