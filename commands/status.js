const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("In school...");
}


module.exports.config = {
  name: "status",
  aliases: ["stats", "s"],
  description: "Status for justin",
  usage: "d>status",
  noalias: "No Aliases",
  accessableby: "Members"
}
