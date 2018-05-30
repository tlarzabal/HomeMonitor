/**
 * Created by thiba on 28/05/2018.
 */

"use strict";

module.exports = class AdList {

    constructor() {
        this.list = [];
    }

    /**
     * Get user by name
     * @param name
     */
    get(name) {
        let adId = this.list.findIndex(i => i.getTitle() === name);
        return this.list[adId];
    }


    /**
     *
     * @param name
     */
    hasAd(ad){
        return (this.list.findIndex(i => i.getTitle() === ad) !== -1);
    }


    push(ad) {
        this.list.push(ad);
    }
}