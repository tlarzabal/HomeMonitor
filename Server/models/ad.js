"use strict";

module.exports = class Ad {

    constructor(publisher,title,rent,nbMaxRoomMates,area,description,adress) {
        this.title = title;
        this.rent = rent;
        this.nbMaxRoomMates = nbMaxRoomMates;
        this.publisher= publisher;
        this.area = area;
        this.description = description;
        this.adress = adress;
        this.isPublished=true;
    }

    getTitle() {
        return this.title;
    }

    getIsPublished() {
        return this.isPublished;
    }

    getPublisher() {
        return this.publisher;
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





}