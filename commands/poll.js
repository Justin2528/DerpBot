const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  //code here
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("NEED ADMIN PERMS!");
  
if(!args[0]) return message.channel.send("Uh... Air?")
 
}


module.exports.config = {
  name: "poll",
  aliases: ["vote"],
  description: "Create a pool!",
  usage: "d>poll <stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}
