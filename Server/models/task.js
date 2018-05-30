"use strict";

module.exports = class Task {

    constructor() {
        this.tasks = new Map();
        this.kindOfTasks = new Array("vaisselle", "sortir les poubelles","ménage", "faire les courses");
        this.logos = new Map();
        this.assigneTask("vaisselle", "Thib");
        this.assigneTask("ménage", "PPE");

    }

    getTasks(){
        return this.tasks;
    }

    getKindOfTasks(){
        return this.kindOfTasks;
    }

    addTask(name){
        if(!this.kindOfTasks.includes(name)){
            this.kindOfTasks.push(name);
        }
    }

    deleteTask(name){
        let i=0;
        for(let n in this.kindOfTasks){
            if (n == name){
                delete this.kindOfTasks[i];
            }else{
                i++;
            }
        }
    }

    assigneTask(task, name){
        if(!this.tasks.has(task)){
            this.tasks.set(task,name);
            return true;
        }else{
            return false;
        }
    }

    deleteAssignement(task){
        this.tasks.delete(task);
    }

    getAssignee(task){
        if(this.tasks.has(task.toLowerCase())){
            return this.tasks.get(task);
        }else{
            return "Aucun.";
        }

    }

    getTaskofUser(user){
        let res = new Array();
        for (let key of this.tasks.keys()) {
            if(this.tasks.get(key).toLowerCase() == user.toLowerCase()){
                res.push(key);
            }
        }
        return res;
    }

}