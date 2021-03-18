const myInformations = require('./information');

var cowsay = require("cowsay");
const myInfo = require('./information');

console.log (cowsay.say({
    text : `Hello, je suis ${myInfo.name} du campus de ${myInfo.campus}`,
}));