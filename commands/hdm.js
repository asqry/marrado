const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);
let prefix = (botconfig.prefix);


module.exports.run = async (bot, message, args) => {
let embed = new Discord.RichEmbed()
.setDescription("Help")
.setColor(purple)
.setThumbnail(bot.user.avatarURL)
.addField(`${prefix}help`, "Sends this message")
.addField(`${prefix}hdm`, "Sends this message in a dm")
.addField(`${prefix}modhelp`, "Sends a message like this, but with moderation commands (Must have Manage Messages permissions to use) - sends in dm")
.addField(`${prefix}invite`, "Sends an invite link")
.addField(`${prefix}botinfo`, "Sends information about this bot")
.addField(`${prefix}server`, "Sends information about the server you're currently in")
.addField(`${prefix}8ball`, "Usage: ``.8ball <question>`` - answers your questions")
.addField(`${prefix}powerlevel`, "Check your power level")
.addField(`${prefix}rng`, "Gives you a random number between 1 and 100")
.addField(`${prefix}dog`, "Random dog photo")
.addField(`${prefix}report`, "Usage: ``.report <@user> <reason>`` - Sends a report against the desired user - requires a ``channel titled #reports``")

message.member.send(embed);

let approved = new Discord.RichEmbed()
.setDescription(":white_check_mark: DM Successfully Sent!")
.setColor(green)
message.channel.send(approved).then(msg => {msg.delete(5000)});

message.member.send("Hope you enjoy Marrado!")
}

module.exports.help = {
    name: "hdm"
}
