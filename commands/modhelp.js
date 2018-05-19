const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);
let prefix = (botconfig.prefix);


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot access these commands.").then(msg => {msg.delete(5000)});
    let embed = new Discord.RichEmbed()
    .setDescription("Mod Help")
    .setColor(purple)
    .setThumbnail(bot.user.avatarURL)
    .addField(`${prefix}modhelp`, "Sends this message in DM")
    .addField(`${prefix}clear`, "Usage: ``.clear <# of messages>`` - Clears given amount of messages. Max 100")
    .addField(`${prefix}kick`, "Usage: ``.kick <@user> <reason>`` - kicks the user - requires a ``channel titled #incidents``")
    .addField(`${prefix}ban`, "Usage: ``.ban <@user> <reason>`` - bans the user from the server - requires a ``channel titled #incidents``")
    .addField(`${prefix}say`, "Usage: ``.say <message>`` - Makes the bot say your message. Deletes your message.")
    .addField(`${prefix}warn`, "Usage: ``.warn <@user> <reason>`` - Gives the user a warning - requires a ``channel titled #incidents``")
    .addField(`${prefix}reload`, "Reloads all commands")
    .addField(`${prefix}rlbot`, "Reloads the bot")
    message.delete().catch();

    message.member.send(embed)

let approved = new Discord.RichEmbed()
.setDescription(":white_check_mark: DM Successfully Sent")
.setColor(green)

    message.channel.send(approved).then(msg => {msg.delete(3000)});
}

module.exports.help = {
    name: "modhelp"
}
