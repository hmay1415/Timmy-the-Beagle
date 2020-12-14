'use strict'

var likeBeagles = prompt('Do you like Beagles?')

while(likeBeagles.toLowerCase() != 'yes') {
    likeBeagles = prompt('Wrong answer! Try again');
}

var perfect = '5';

for(var i = 0; i < 4; i++) {
    var correctPerfect = prompt('Between 1 and 10, what is the perfect number of beagles?')
    
    if (correctPerfect === perfect){
        alert('Hooray! You got it!');
        break;
    }
     if (i === 3 && correctPerfect != perfect){
        alert('Go away and think about your answer for 5 minutes before trying again');
    }
}

function askUserName(){
var userName = prompt('Please enter your name for a fun surprise');

if (userName == 'Hilary'){
    document.write('A friend of my Mom ' + userName.toUpperCase())
} else {
document.write('A Friend of ' + userName.toLowerCase());
}
}

function showTime(){
    var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {greeting = 'Good evening!';}
else if (hourNow > 12) {greeting = 'Good afternoon!';}
else if (hourNow > 0) {greeting = 'Good morning!';}
else {greeting = 'Welcome!';}

document.write('<h3>' + greeting + '</h3>');
}

function goodbyeTime(){
    var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {greeting = 'Have a good night!';}
else if (hourNow > 12) {greeting = 'Enjoy the rest of your day!';}
else if (hourNow > 0) {greeting = 'Hope this got you off to a good start today!';}
else {greeting = 'Welcome!';}

document.write('<h4>' + greeting + '</h4>');
}