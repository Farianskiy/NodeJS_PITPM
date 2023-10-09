'use strict';
const http = require('http');
const port = process.env.PORT || 1337;
const os = require('os');
const greeting = require('./greeting');
const User = require('./user.js');
const welcome = require('./welcome');
const globalGreeting = require('./globalGreeting');


http.createServer(function (request, response) {
    response.end('Hello NodeJS!');

    // получим имя текущего пользователя
    let userName = os.userInfo().username;

    console.log(`Request date: ${greeting.date}`);
    console.log(greeting.getMessage(userName));

    let eugene = new User('Eugene', 32);
    eugene.sayHi();

    var greeting1 = require('./greeting.js');
    console.log(`Hello ${greeting1.name}`); //Hello Alice

    var greeting2 = require('./greeting.js');
    greeting2.name = 'Bob';

    console.log(`Hello ${greeting2.name}`); //Hello Bob
    // greeting1.name тоже изменилось
    console.log(`Hello ${greeting1.name}`); //Hello Bob

    welcome.getMorningMessage();
    welcome.getEveningMessage();

    global.globalName = 'Eugene';
    global.console.log(date);
    console.log(globalGreeting.getMessage());

}).listen(port, '127.0.0.1', function () {
    console.log(
        'The server started listening for requests on the port 1337'
    );
});






