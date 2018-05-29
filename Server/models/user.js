/**
 * Created by thiba on 28/05/2018.
 */

"use strict";

module.exports = class User {

    constructor(name,firstname,password,mail,birthday,pseudo,hobbies) {
        this.name = name;
        this.firstname = firstname;
        this.password= password;
        this.mail = mail;
        this.birthday=birthday;
        this.pseudo = pseudo;
        this.hobbies = hobbies;
    }

    getHobbies() {
        return this.hobbies;
    }

    getName() {
        return this.name;
    }
    getPseudo() {
        return this.pseudo;
    }
    getFirstname() {
        return this.firstname;
    }
    getBirthday() {
        return this.birthday;
    }
    getPassword(){
        return this.password;
    }

    getMail(){
        return this.mail;
    }
}