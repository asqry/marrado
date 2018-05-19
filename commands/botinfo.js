const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);


module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.avatarURL
    let bembed = new Discord.RichEmbed()
    .setTitle("Marrado Bot")
    .setThumbnail(bicon)
    .setColor(blue)
    .addField("Bot Username", bot.user.username)
    .addField("Date Created", bot.user.createdAt)
    .addField("Creater", "seekeroftacos#8722")
    .addField("Created with", "JavaScript, Node.js, and Discord.js")

    message.delete().catch();

    message.channel.send(bembed).then(msg => {msg.delete(10000)});
}

module.exports.help = {
    name: "botinfo"
}
