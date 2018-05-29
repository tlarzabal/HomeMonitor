"use strict";

module.exports = class shoppingList {

    constructor() {
        this.list = new Map();
        this.items = new Array("Pain");
        this.assignValueDefault("Pain");
    }

    getItems(){
        return this.items;
    }

    assignValueDefault(item){
        if(!this.list.has(item)){
            this.list.set(item, 1);
        }
    }
}
