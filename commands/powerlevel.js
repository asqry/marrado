const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);

module.exports.run = async (bot, message, args) => {
    let replies = ["Over 9,000", "7,372", "2,773", "382", "273", "1,503", "liek 283,389,234,586", "Too legit to quit"];

    let result = Math.floor((Math.random() * replies.length));

    let pembed = new Discord.RichEmbed()
    .setTitle(message.author.tag)
    .setColor(blue)
    .addField("Your power level", replies[result])

    message.delete().catch();

    message.channel.send(pembed).then(msg => {msg.delete(5000)});
}

module.exports.help = {
    name: "powerlevel"
}
