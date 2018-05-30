"use strict";

let User = require("./models/user.js");
let UserList = require("./models/userList.js");
let Ad = require("./models/ad.js");
let Task = require("./models/task.js");
let ShoppingList = require("./models/shoppingList.js");
let Event = require("./models/event.js");
let AdList = require("./models/adList.js");
let Flatsharing = require("./models/flatsharing.js");
let FlatsharingList = require("./models/flatsharingList.js");


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
var io = require('socket.io').listen(server);


let userList = new UserList;
let shoppingList = new ShoppingList;
let task = new Task;
var adList = new AdList;
let flatsharingList = new FlatsharingList;
var eventList = [];

/**
 * Partie API
 */



app.get('/getUser/:pseudo', function (req, res) {
    const idUser = req.params.pseudo.toLowerCase();
    if (userList.hasUser(idUser)) {
        res.send({
            passed: true,
            user: userList.get(idUser)
        });
    }
    else {
        res.status(404).send({
            message: "No User Found"
        });
    }
});


app.post('/joinAd/', function (req, res) {
    const json = req.body;
    const userName = json['user'].toLowerCase();
    const adTitle = json['adTitle'];
    if (userList.hasUser(userName) && adList.hasAd(adTitle)) {
        const ad = adList.get(adTitle);
        ad.pushDemand(userName);
        console.log(ad);
        res.send({
            passed: true,
            user: userName
        });
    }
});

app.post('/joinFlatsharing/', function (req, res) {
    const json = req.body;
    const userId = json['user'].toLowerCase();
    const adTitle = json['adTitle'];
    if (userList.hasUser(userId) && adList.hasAd(adTitle)) {
        const ad = adList.get(adTitle);
        ad.pushRoomMates(userId);
        flatsharingList.hasFlatsharing(ad);
        res.send({
            passed: true,
            user: userId
        });
    }
});

app.post('/createAd/:pseudo', function (req, res) {
    const idUser = req.params.pseudo.toLowerCase();
    if (userList.hasUser(idUser)) {
        const json = req.body.value;
        const title = json['title'];
        const rent = json['rent'];
        const nbMaxRoomMates = json['nbMaxRoomMates'];
        const description = json['description'];
        const adress = json['adress'];
        const area = json['area'];
        let ad = new Ad(idUser, title, rent, nbMaxRoomMates, area, description, adress);
        let flatsharing = new Flatsharing(ad);
        flatsharingList.push(flatsharing);
        ad.pushRoomMates(idUser);
        adList.push(ad);


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


app.post('/createEvent/:pseudo', function (req, res) {
    const idUser = req.params.pseudo.toLowerCase();
    if (userList.hasUser(idUser)) {

        const json = req.body.value;
        const title = json['title'];
        const dateEvent = json['dateEvent'];
        const description = json['description'];
        const adress = json['adress'];

        let event = new Event(idUser, title, dateEvent, description, adress);

        eventList.push(event);

        res.send({
            passed: true,
            events: eventList
        });

    } else {
        res.status(404).send({
            message: "No User Found"
        });
    }
});

app.get('/getAllEvents', function (req, res) {
    res.send({
        passed: true,
        events: eventList
    });
});


app.post('/createUser', function (req, res) {
    //console.log(req.body);
    const json = req.body;
    const name = json['name'].toLowerCase();
    const firstName = json['firstname'].toLowerCase();
    const password = json['password'];
    const mail = json['mail'].toLowerCase();
    const birthday = json['birthday'];
    const pseudo = json['pseudo'].toLowerCase();
    const hobbies = json['hobbies'];


    if (!userList.hasUser(pseudo)) {
        let user = new User(name, firstName, password, mail, birthday, pseudo, hobbies);
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

app.get('/getItems', function (req, res) {
    let item = shoppingList.getItems();
    console.log(item);
    res.send({
        passed: true,
        item: item
    });
});

app.get('/deleteItems/:pseudo', function (req, res) {
    const t = req.params.pseudo;
    let items = shoppingList.deleteItem(t);
    console.log(items);
    res.send({
        passed: true,
        item: items
    });
});


app.get('/addItem/:pseudo', function(req, res){
    const t = req.params.pseudo;
    let items = shoppingList.addItem(t);
    console.log(items);
    res.send({
        passed: true,
        item: items
    });
});


app.get('/getAllKindOfTasks', function (req, res) {
    let kindTask = task.getKindOfTasks();
    console.log(kindTask);
    res.send({
        passed: true,
        kind: kindTask
    });
});

app.get('/getTaskAssignee/:task', function (req, res) {
    const t = req.params.task.toLowerCase();
    let assig = task.getAssignee(t);
    console.log(assig);
    res.send({
        passed: true,
        assignee: assig
    });
});


app.get('/getAllAds', function (req, res) {
    let tempList =[];
    adList.list.forEach(function(l) {
        if(l.getNbMaxRoomMates() > l.roomMatesId.length)
            tempList.push(l);
    });

    res.send({
        passed: true,
        ads: tempList
    });
    console.log(adList);
});



app.get('/doTask/:task', function (req, res) {
    const t = req.params.task.toLowerCase();
    task.deleteAssignement(t);
    res.send({
        passed: true
    });
});

app.get('/assigneTask/:task/:pseudo', function (req, res) {
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

app.get('/createNewTask/:task', function (req, res) {
    const t = req.params.task.toLowerCase();
    task.addTask(t);
    res.send({
        status: true
    });
});

app.get('/getTaskofUser/:pseudo', function (req, res) {
    const usr = req.params.pseudo.toLowerCase();
    let tab = task.getTaskofUser(usr);
    console.log(tab.length);
    console.log("USER : ");
    console.log(usr);
    res.send({
        passed: true,
        result: tab
    });
});



// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {

    console.log('Un client est connecté !');

    socket.on('createEvent', function (data) {


        const idUser = data['idUser'].toLowerCase();
        if (userList.hasUser(idUser)) {

            const json = data['value'];
            const title = json['title'];
            const dateEvent = json['dateEvent'];
            const description = json['description'];
            const adress = json['adress'];

            let event = new Event(idUser, title, dateEvent, description, adress);

            eventList.push(event);

            console.log('recpetion du message venant de la socket');
            console.log(eventList);

            io.emit('addedEvent',{events: eventList});
        }


    });

});


