const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
let green = (botconfig.green);
let blue = (botconfig.blue);
let red = (botconfig.red);
let purple = (botconfig.purple);


module.exports.run = async (bot, message, args) => {
    if(!args[1]) return message.channel.send("Please ask a full question.");
    let replies = ["Yes.", "No.", "I don't know.", "Not in a million years.", "It is certain.", "Focus and ask again.", "For sure."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let bembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(blue)
    .addField(":8ball: Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(bembed);

}

module.exports.help = {
    name: "8ball"
}
