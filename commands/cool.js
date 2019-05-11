const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
  message.author.send("YOU ARE REALLY COOL!");
  message.author.send("I guess?");
  message.author.send("You are bad!");
  
}


module.exports.config = {
  name: "cool",
  aliases: ["c", "col"],
  description: "Uh cool?",
  usage: "d>cool",
  noalias: "No Aliases",
  accessableby: "Members"
}
