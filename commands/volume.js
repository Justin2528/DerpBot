const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);

 if(!fetched) return message.channel.send("There currently isn't any music playing in this guild!");
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you currently aren't in the same channel as the bot!");

   if(isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send("Please input a number between 0-200");
  
   fetched.dispatcher.setVolume(args[0]/100);

 message.channel.send(`Successfully set the volume of \`${fetched.queue[0].songTitle}\` to ${args[0]}.`)
}


module.exports.config = {
  name: "volume",
  aliases: ["vol"],
  description: "Set da volume",
  usage: "d>volume <0-200>",
  noalias: "No Aliases",
  accessableby: "Members"
}

