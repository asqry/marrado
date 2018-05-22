const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let searchterm = args.join("%20");
    let searchurl = `https://www.google.com/search?q=${searchterm}&rlz=1C1CHBF_enUS781US781&oq=${searchterm}&aqs=chrome..69i57j0l5.1959j0j7&sourceid=chrome&ie=UTF-8`
    message.delete().catch();
    message.channel.send(searchurl);
}

module.exports.help = {
	name: "google"
}
