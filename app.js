console.log('Starting App');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ = require('lodash');
var result = notes.addNote();

var sum = notes.addNumber(1,2);
console.log(sum);

//console.log(result);

// var user = os.userInfo();
// console.log(user);
// fs.appendFile('greeting.txt',`Hello ${user.username}! you are ${notes.age}.`, (err)=>{
//     if(err)
//         throw err;
// })