const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  //code here
  let fetched = ops.active.get(message.guild.id);

  if(!fetched) return message.channel.send("There currently isn't any music playing in this guild!");
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you currently aren't in the same channel as the bot!");
  
  let userCount = message.member.voiceChannel.members.size;
  
  let required = Math.ceil(userCount/2);
  
  if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
  
  if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, you already voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required.`)

  
   fetched.queue[0].voteSkips.push(message.member.id);
  
  ops.active.set(message.guild.id, fetched);
  
  if (fetched.queue[0].voteSkips.length >= required){
    
    message.channel.send("Successfully skipped song!");

 return fetched.dispatcher.emit('finish');
  }

 message.channel.send(`Successfully voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required.`);
  
  
  
}


module.exports.config = {
  name: "skip",
  aliases: ["vs"],
  description: "Vote to Skip! || It will skip it auto if only 1 ppl",
  usage: "d>skip",
  noalias: "No Aliases",
  accessableby: "Members"
}

