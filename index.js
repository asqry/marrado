const botconfig = require('./botconfig.json');
const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();

function loadCmds() {
    fs.readdir("./commands/", (err, files) => {

        if(err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0){
            console.log("Couldn't find commands.");
            return;
        }

        jsfile.forEach((f, i) =>{
            delete require.cache[require.resolve(`./commands/${f}`)];
            let props = require(`./commands/${f}`);
            console.log(`${f} loaded!`);
            bot.commands.set(props.help.name, props);
        });

    });

}

bot.on("guildMemberAdd", async member => {
    console.log(`${member.id} has joined the server.`);

    let welcomechannel = member.guild.channels.find(`name`, "welcome");
    welcomechannel.send(`Welcome to the server, ${member}! Have a great time here!`)

    member.addRole(member.guild.roles.find(`name`, "Member"))
});

bot.on("guildMemberRemove", async member => {
    console.log(`${member.id} has left the server.`);

    let welcomechannel = member.guild.channels.find(`name`, "welcome");
    welcomechannel.send(`${member} has left the server.`)
});

bot.on("channelCreate", async channel => {
    console.log(`${channel.name} has been created`);

    let logchannel = channel.guild.channels.find(`name`, "logs");
    logchannel.send(`The channel "${channel}" has been created.`)
});

bot.on("channelDelete", async channel => {
    console.log(`${channel.name} has been deleted`);

    let logchannel = channel.guild.channels.find(`name`, "logs");
    logchannel.send(`The channel "${channel.name}" has been deleted.`)
});

function loadBot() {
    bot.on("ready", async () => {
        console.log(`${bot.user.username} is finally online!`);
        // bot.user.setActivity("Marrado", {type: "Playing"});
    });
}

loadBot();

loadCmds();

bot.on("message", async message => {
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandFile.run(bot, message, args);

    if(cmd === `${prefix}setgame`){
        let game = args.slice(0).join(" ");
        let gametype = args[0]
        bot.user.setActivity(`${game}`, {type: "Playing"});

        let embed = new Discord.RichEmbed()
        .setTitle(`Game Successfully set to "${game}"`)

        message.delete().catch()

        message.channel.send(embed).then(msg => {msg.delete(5000)});
    }

    if(cmd === `${prefix}reload`){
        message.delete().catch();
        let embed = new Discord.RichEmbed()
        .setDescription("All Commands Have Successfully Reloaded");
        message.channel.send(embed).then(msg => {msg.delete(5000)});
        loadCmds()
    }

    if(cmd === `${prefix}rlbot`){
        message.delete().catch();
        let rembed = new Discord.RichEmbed()
        .setDescription("Bot Has Successfully Reloaded");

        message.channel.send(rembed).then(msg => {msg.delete(5000)});

        loadBot()
    }

});

bot.login(botconfig.token);
