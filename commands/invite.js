const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`[Ok here]()https://discordapp.com/api/oauth2/authorize?client_id=547771680798539776&permissions=8&scope=bot`);
}


module.exports.config = {
  name: "invite",
  aliases: ["add"],
  description: "Add the bot to ya good server.",
  usage: "d>invite",
  noalias: "No Aliases",
  accessableby: "Members"
}
