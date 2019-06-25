const Discord = require("discord.js");
const search = require("yt-search");

module.exports.run = async (bot, message, args, ops) => {


 search(args.join(' '), function(err, res) {
        
          if (err) return message.channel.send('Sorry, something went wrong');

          let videos = res.videos.slice(0, 10);

     let resp = '';
     for (var i in videos) {
       
        resp += `**[${parseInt(i)+1}]** \`${videos[i].title}\`\n`;
       
        
     }

      resp += `\n**Choose a number between \`1-${videos.length}\`**`;


     message.channel.send(resp);


     const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
  
      const collector = message.channel.createMessageCollector(filter);
  
  
     collector.videos = videos;
  
     collector.once('collect', function(m) {
       
       
          let commandFile = require(`./play.js`);
       
         commandFile.run(bot, message, [this.videos[parseInt(m.content)-1].url], ops);
       
          });
        });
//   let fetched = ops.active.get(message.guild.id);

//   if(!fetched) return message.channel.send("There currently isn't any music playing in this guild!");
  
//   if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Sorry, you currently aren't in the same channel as the bot!");
  
 }


module.exports.config = {
  name: "search",
  aliases: ["search"],
  description: "Later for play command!",
  usage: "d>search <stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}

