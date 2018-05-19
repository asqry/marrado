const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);


module.exports.run = async (bot, message, args) => {
    let dmuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let dmsg = args.slice(1).join(" ");
    message.delete().catch();

    dmuser.send(dmsg)
}

module.exports.help = {
    name: "dm"
}
