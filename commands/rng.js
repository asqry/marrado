const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);


module.exports.run = async (bot, message, args) => {
    let result = Math.floor((Math.random(1) * 100));

    message.reply(`Your number is ${result}.`)
}

module.exports.help = {
    name: "rng"
}
