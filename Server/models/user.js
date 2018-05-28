/**
 * Created by thiba on 28/05/2018.
 */

"use strict";

module.exports = class User {

    constructor(name,password,mail) {
        this.name = name;
        this.password= password;
        this.mail = mail;
    }
    getName() {
        return this.name;
    }

    getPassword(){
        return this.password;
    }

    getMail(){
        return this.mail;
    }
}
