const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);


module.exports.run = async (bot, message, args) => {
    let newrole = args.slice(0).join(" ");
    let newcolor = args.slice(1)
    message.guild.createRole({
        name: `${newrole}`,
        color: `${newcolor}`,
        permissions: []
    });

    let embed = new Discord.RichEmbed()
    .setTitle(`:white_check_mark: Successfully created the role ${newrole} with the color ${newcolor}`)
    .setColor(green)

    message.channel.send(embed)
}

module.exports.help = {
    name: "createrole"
}
