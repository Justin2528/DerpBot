const Discord = require("discord.js");
var WikiFakt = require('wikifakt');


module.exports.run = async (bot, message, args) => {

 const ayy = bot.emojis.get("468044901913853963");
  WikiFakt.getRandomArticleTitle().then(function(title) {
  let ok = new Discord.RichEmbed()
  .setColor("Random")
  .setTitle(`${ayy} Random Article Title!`)
  .setDescription(title)
  .setFooter("DerpBot")

 message.channel.send(ok)
});
}


module.exports.config = {
  name: "wikiat",
  aliases: ["wikiArticleTitle"],
  description: "get Article Title from wiki!",
  usage: "d>wikiat",
  noalias: "No Aliases",
  accessableby: "Members"
}
