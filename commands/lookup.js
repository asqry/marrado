const botconfig = require("../botconfig.json");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete().catch()
    message.channel.send("^^ @everyone ^^")
}

module.exports.help = {
    name: "lookup"
}
