/**
 * Created by thiba on 28/05/2018.
 */

"use strict";

module.exports = class UserList {

    constructor() {
        this.list = [];
    }

    /**
     * Get user by pseudo (id)
     * @param pseudo
     */
    get(pseudo) {
        let userId = this.list.findIndex(i => i.getPseudo() === pseudo);
        return this.list[userId];
    }


    /**
     *
     * @param pseudo
     */
    hasUser(pseudo){
        return (this.list.findIndex(i => i.getPseudo() === pseudo) !== -1);
    }


    push(user) {
        this.list.push(user);
    }
}
