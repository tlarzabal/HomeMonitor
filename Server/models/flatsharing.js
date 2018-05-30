"use strict";

module.exports = class FlatSharing {

    constructor(ad) {
        this.idChief = ad.getIDPublisher();
        this.ad = ad;

    }

    getAd(){
        return this.ad;
    }
}