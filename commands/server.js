const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);


module.exports.run = async (bot, message, args) => {
    let uicon = message.guild.iconURL
    let uembed = new Discord.RichEmbed()
    .setTitle(`Server Information for *${message.guild.name}*`)
    .setColor(blue)
    .setThumbnail(uicon)
    .addField("Server Name", message.guild.name)
    .addField("Date Created", message.guild.createdAt)
    .addField("You joined on", message.member.joinedAt)
    .addField("Member Count", message.guild.memberCount)

    message.channel.send(uembed)
}

module.exports.help = {
    name: "server"
}
