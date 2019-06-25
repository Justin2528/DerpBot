const Discord = require("discord.js");
const ytdl = require("ytdl-core")

module.exports.run = async (bot, message, args, ops) => {
  //code here
 if(!message.member.voiceChannel) return message.channel.send("Please connect to a voice Channel");
   
if(!message.guild.me.voiceChannel) return message.channel.send("Sorry, but the bot isn't connected to the guild.")
if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("Sorry, you aren't connected to the same channel.")
let data = ops.active.get(message.guild.id) || {};
 let guildID = message.guild.id;
 message.guild.me.voiceChannel.leave();
ops.active.delete(data.dispatcher.guildID).catch(console.error);



 message.channel.send("Leaving channel...")
}


module.exports.config = {
  name: "leave",
  aliases: ["l"],
  description: "Leave the VC (Voice Channel)",
  usage: "d>leave",
  noalias: "No Aliases",
  accessableby: "Members"
}

