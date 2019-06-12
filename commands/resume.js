const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);

 if(!fetched) return message.channel.send("There currently isn't any music playing in this guild!");
  
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you aren't in the same channel as the bot.");
  
  if(!fetched.dispatcher.paused) return message.channel.send("This music isn't paused!");

 fetched.dispatcher.resume();
  
   message.channel.send(`Successfully resumed \`${fetched.queue[0].songTitle}\`!`);
}


module.exports.config = {
  name: "resume",
  aliases: ["re"],
  description: "resume music!",
  usage: "d>resume",
  noalias: "No Aliases",
  accessableby: "Members"
}

