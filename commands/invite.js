const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let ew = new Discord.RichEmbed()
  .setDescription("[Ok here](https://discordapp.com/api/oauth2/authorize?client_id=547771680798539776&permissions=8&scope=bot)")
  .setFooter("oof")
  message.channel.send(ew);
}


module.exports.config = {
  name: "invite",
  aliases: ["add"],
  description: "Add the bot to ya good server.",
  usage: "d>invite",
  noalias: "No Aliases",
  accessableby: "Members"
}
