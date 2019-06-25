const Discord = require("discord.js");
var lyrics = require('node-lyrics');

module.exports.run = async (bot, message, args, ops) => {
  //code here
 let boi = message.content.split(' ').slice(1).join(' ');
 if(!args[0])return message.channel.send("Air... Cool")
   lyrics.getAlbums(boi, function(err, albums) {
    if (err) {
        console.log(err)
    return message.channel.send(`Error! \`\`\`${err}\`\`\``)
    }
     let ok = new Discord.RichEmbed()
    .setTitle(`${boi}'s Albums'`)
    .setDescription(albums)
     .setFooter("DerpBot Albums")
     
      message.channel.send(ok);
});
}


module.exports.config = {
  name: "albums",
  aliases: ["alb"],
  description: "albums for uh music creator?",
  usage: "d>albums <stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}

