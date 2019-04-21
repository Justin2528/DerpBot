const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Invalid Permission. (Hello there! you need Manage Roles permission to mute people!)");
  if(!message.guild.me.hasPermissions(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("ERROR: 500 (No perms `MANAGE_ROLES`)");
  let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!mutee) return message.reply("Please supply a bad boi to be muted!");
  
  let reason = args.slice(1).join(" ");
  
  

  
}



module.exports.config = {
  name: "mute",
  aliases: ["m","nospeak"]
  description: "Mutes some bad boi",
  usage: "derp>mute <@user> <reason>",
  noalias: "No Aliases",
  accessableby: "Members"
}
