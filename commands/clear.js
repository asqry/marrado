const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have sufficient permissions.");
    if(!args[0]) return message.channel.send("Please enter the amount of messages you would like to clear.")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${message.author} successfully deleted ${args[0]} messages in ${message.channel}.`).then(msg => {msg.delete(5000)});
    })
}

module.exports.help = {
    name: "clear"
}
