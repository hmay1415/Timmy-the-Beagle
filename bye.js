var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {greeting = 'Have a good night!';}
else if (hourNow > 12) {greeting = 'Enjoy the rest of your day!';}
else if (hourNow > 0) {greeting = 'Hope this got you off to a good start today!';}
else {greeting = 'Welcome!';}

document.write('<h4>' + greeting + '</h4>');