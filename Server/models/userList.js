/**
 * Created by thiba on 28/05/2018.
 */

"use strict";

module.exports = class GameList {

    constructor() {
        this.list = [];
    }

    /**
     * Get user by name
     * @param name
     */
    get(name) {
        let userId = this.list.findIndex(i => i.getName() === name.toLowerCase());
        return this.list[userId];
    }


    /**
     *
     * @param name
     */
    hasUser(name){
        return (this.list.findIndex(i => i.getName() === name.toLowerCase()) !== -1);
    }



    push(name) {
        this.list.push(name);
    }
}
