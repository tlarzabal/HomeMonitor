"use strict";

let User = require("./models/user.js");
let UserList = require("./models/userList.js");

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

console.log("HomeMonitor Server");

const http = require('http').Server(app);
const server = app.listen(process.env.PORT || 8080);
let userList = new UserList;

/**
 * Partie API
 */



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


app.get('/createUser/:name/:firstname/:password/:mail/:birthday/:pseudo', function(req, res){

    const name = req.params.name.toLowerCase();
    const firstName = req.params.firstname.toLowerCase();
    const password = req.params.password;
    const mail = req.params.mail.toLowerCase();
    const birthday = req.params.birthday;
    const pseudo = req.params.pseudo;

    if(!userList.hasUser(pseudo)){

        let user = new User(name,firstName,password,mail,birthday,pseudo);
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