/**
 * Created by thiba on 28/05/2018.
 */

"use strict";

module.exports = class FlatsharingList {

    constructor() {
        this.list = [];
    }

    get(name) {
        let adId = this.list.findIndex(i => i.getTitle() === name);
        return this.list[adId];
    }


    hasFlatsharing(ad){
        return (this.list.findIndex(i => i.getAd() === ad) !== -1);
    }


    push(flatsharing) {
        this.list.push(flatsharing);
    }
}