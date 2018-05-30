"use strict";

let User = require("./models/user.js");
let UserList = require("./models/userList.js");
let Ad = require("./models/ad.js");
let Task = require("./models/task.js");
let ShoppingList = require("./models/shoppingList.js");
let Event = require("./models/event.js");


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
var adList=[];
var eventList=[];

/**
 * Partie API
 */



app.get('/getUser/:pseudo', function(req, res){
    const idUser = req.params.pseudo.toLowerCase();
    if(userList.hasUser(idUser)){
        res.send({
            passed: true,
            user: userList.get(idUser)
        });
    }
    else {
        res.status(404).send({
            message: "No User Found"
        })
    }
});

app.post('/createAd/:pseudo', function(req, res) {
    const idUser = req.params.pseudo.toLowerCase();
    if(userList.hasUser(idUser)){

        const json = req.body.value;
        const title = json['title'];
        const rent = json['rent'];
        const nbMaxRoomMates = json['nbMaxRoomMates'];
        const description = json['description'];
        const adress = json['adress'];
        const area = json['area'];

        let ad = new Ad(idUser,title,rent,nbMaxRoomMates,area,description,adress);

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

app.post('/createEvent/:pseudo', function(req, res) {
    const idUser = req.params.pseudo.toLowerCase();
    if(userList.hasUser(idUser)){

        const json = req.body.value;
        const title = json['title'];
        const dateEvent = json['dateEvent'];
        const description = json['description'];
        const adress = json['adress'];

        let event = new Event(idUser,title,dateEvent,description,adress);

        eventList.push(event);

        res.send({
            passed: true,
            user: idUser
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

app.get('/deleteItems/:pseudo', function(req, res){
    const t = req.params.pseudo;
    let items = shoppingList.deleteItem(t);
    console.log(items);
    res.send({
        passed: true,
        item: items
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


app.get('/getAllAds', function(req, res){
    res.send({
        passed: true,
        ads: adList
    });
    console.log(adList);
});

app.get('/doTask/:task', function(req, res){
    const t = req.params.task.toLowerCase();
    task.deleteAssignement(t);
    res.send({
        passed: true
    });
});

app.get('/assigneTask/:task/:pseudo', function(req, res) {
    const t = req.params.task.toLowerCase();
    const n = req.params.pseudo.toLowerCase();
    let result = task.assigneTask(t, n);

    if (result) {
        res.send({
            passed: true
        });
    } else {
        res.status(404).send({
            passed: true
        });
    }

});

app.get('/createNewTask/:task', function(req, res){
    const t = req.params.task.toLowerCase();
    task.addTask(t);
    res.send({
        status: true
    });
});

app.get('/getTaskofUser/:user',function(req, res){
    const usr = req.params.user.toLowerCase();
    let tab = task.getTaskofUser(usr);
    console.log(tab.length);
    console.log("USER : ");
    console.log(usr);
    res.send({
        passed: true,
        result: tab
    });
});