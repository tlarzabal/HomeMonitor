"use strict";

module.exports = class shoppingList {

    constructor() {
        this.list = new Map();
        this.items = ["Pain", "Semoule"];
        this.assignValueDefault("Pain", "Semoule");
    }

    getItems(){
        return this.items;
    }

    addItem(name){
        if (name!=="") {
            this.items.push(name);
            this.assignValueDefault(name);
        }
        return this.items;
    }

    deleteItem(name){
        this.list.delete(name)
        this.list.clear();
        var index = this.items.indexOf(name);
        if (index > -1) {
            this.items.splice(index, 1);
        }
        return this.items;
    }

    assignValueDefault(item){
        if(!this.list.has(item)){
            this.list.set(item, 1);
        }
    }
}
