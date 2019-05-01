const Discord = require("discord.js");
var servers = {};

module.exports.run = async (bot, message, args) => {
  if(!args[0]){
    message.channel.send("Gimme da music link.")
  }
}


module.exports.config = {
  name: "play",
  aliases: ["p"],
  description: "Play Music!",
  usage: "d>play <link>",
  noalias: "No Aliases",
  accessableby: "Members"
}
