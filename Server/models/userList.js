/**
 * Created by thiba on 28/05/2018.
 */

"use strict";

module.exports = class UserList {

    constructor() {
        this.list = [];
    }

    /**
     * Get user by name
     * @param name
     */
    get(name) {
        let userId = this.list.findIndex(i => i.getPseudo() === name);
        return this.list[userId];
    }


    /**
     *
     * @param name
     */
    hasUser(pseudo){
        return (this.list.findIndex(i => i.getPseudo() === pseudo) !== -1);
    }


    push(name) {
        this.list.push(name);
    }
}
