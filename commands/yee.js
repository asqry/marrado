const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);


module.exports.run = async (bot, message, args) => {
    message.channel.send({files: ["./images/yee.jpg"]})
}

module.exports.help = {
    name: "yee"
}
