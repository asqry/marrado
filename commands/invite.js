const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);


module.exports.run = async (bot, message, args) => {
    let inv = new Discord.RichEmbed()
    .setTitle("Invite Marrado to your server")
    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=439539207917273108&permissions=8&scope=bot")
    .setColor(blue)

    message.delete().catch();

    message.channel.send(inv).then(msg => {msg.delete(10000)});
}

module.exports.help = {
    name: "invite"
}
