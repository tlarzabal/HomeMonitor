"use strict";

let User = require("./models/user.js");
let UserList = require("./models/userList.js");
let Ad = require("./models/ad.js");
let Task = require("./models/task.js");
let ShoppingList = require("./models/shoppingList.js");


const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(express.static('media'));

app.use(bodyParser.urlencoded({
    extended: true
}));

console.log("HomeMonitor Server");

const http = require('http').Server(app);
const server = app.listen(process.env.PORT || 8080);
let userList = new UserList;
let shoppingList = new ShoppingList;
let task = new Task;

/**
 * Partie API
 */

var adList=[];

app.get('/getUser/:name', function(req, res){
    const userName = req.params.name.toLowerCase();
    if(userList.hasUser(userName)){
        res.send({
            passed: true,
            user: userList.get(userName)
        });
    }
    else {
        res.status(404).send({
            message: "No User Found"
        })
    }
});

app.post('/createAd/:name', function(req, res) {
    const userName = req.params.name.toLowerCase();
    if(userList.hasUser(userName)){

        const json = req.body;
        const title = json['title'];
        const rent = json['rent'];
        const nbMaxRoomMates = json['nbMaxRoomMates'];
        const description = json['description'];
        const adress = json['adress'];
        const area = json['area'];

        let user = userList.get(userName);
        let ad = new Ad(user,title,rent,nbMaxRoomMates,area,description,adress);

        adList.push(ad);


        res.send({
            passed: true,
            user: user
        });

    } else {
        res.status(404).send({
            message: "No User Found"
        });
    }

    });


app.post('/createUser', function(req, res){
    //console.log(req.body);
    const json = req.body;
    const name = json['name'].toLowerCase();
    const firstName = json['firstname'].toLowerCase();
    const password = json['password'];
    const mail = json['mail'].toLowerCase();
    const birthday = json['birthday'];
    const pseudo = json['pseudo'].toLowerCase();
    const hobbies = json['hobbies'];


    if(!userList.hasUser(pseudo)){
        let user = new User(name,firstName,password,mail,birthday,pseudo,hobbies);
        userList.push(user);
        res.send({
            passed: true,
            user: user
        });
    }
    else {
        res.status(403).send({
            passed: false,
            message: "User already known !"
        });
    }
});

app.get('/getItems', function(req, res){
    let item = shoppingList.getItems();
    console.log(item);
    res.send({
        passed: true,
        item: item
    });
});


app.get('/getAllKindOfTasks', function(req, res){
    let kindTask = task.getKindOfTasks();
    console.log(kindTask);
    res.send({
        passed: true,
        kind: kindTask
    });
});

app.get('/getTaskAssignee/:task', function(req, res){
    const t = req.params.task.toLowerCase();
    let assig = task.getAssignee(t);
    console.log(assig);
    res.send({
        passed: true,
        assignee: assig
    });
});