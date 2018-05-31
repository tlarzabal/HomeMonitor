"use strict";

module.exports = class Task {

    constructor() {
        this.tasks = new Map();
        this.logos = new Map();
    }

    getTasks() {
        return this.tasks;
    }

    getKindOfTasks() {
        let res = new Array();
        for (let key of this.tasks.keys()) {
            res.push(key);
        }
        return res;
    }

    assigneTask(task, name) {
        if (!this.tasks.has(task)) {
            this.tasks.set(task, name);
            return true;
        } else {
            return false;
        }
    }

    deleteAssignement(task) {
        this.tasks.delete(task);
    }

    getAssignee(task) {
        return this.tasks.get(task);
    }

    getTaskofUser(user) {
        let res = new Array();
        for (let key of this.tasks.keys()) {
            if (this.tasks.get(key).toLowerCase() == user.toLowerCase()) {
                res.push(key);
            }
        }
        return res;
    }

    getAllAssignee() {
        let kot = this.getKindOfTasks();
        let res = new Array();
        for (let i=0; i<kot.length; i++) {
            console.log("element : ");
            console.log(kot[i]);
            res.push(this.getAssignee(kot[i]));
        }
        return res;
    }

}