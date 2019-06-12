const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  //code here
   let fetched = ops.active.get(message.guild.id);

    if (!fetched) return message.channel.send('There currently isn\'t any music playing in this guild!');

    let queue = fetched.queue;
    let nowPlaying = queue[0];


    let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**Queue**__\n`;

    for (var i = 1; i < queue.length; i++) {
        resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`

    }

    message.channel.send(resp);
}


module.exports.config = {
  name: "queue",
  aliases: ["q"],
  description: "queue for music!",
  usage: "d>queue",
  noalias: "No Aliases",
  accessableby: "Members"
}

