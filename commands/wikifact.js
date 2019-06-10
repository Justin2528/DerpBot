const Discord = require("discord.js");
var WikiFakt = require('wikifakt');


module.exports.run = async (bot, message, args) => {

 const ayy = bot.emojis.get("468044901913853963");
  WikiFakt.getRandomFact().then(function(fact) {
  let ok = new Discord.RichEmbed()
  .setColor("Random")
  .setTitle(`${ayy} Wiki Fact`)
  .setDescription(fact)
  .setFooter("DerpBot WikiFact")
});
}


module.exports.config = {
  name: "wikifact",
  aliases: ["wf"],
  description: "get facts from wiki! funfact is like uh settled",
  usage: "d>wikifact",
  noalias: "No Aliases",
  accessableby: "Members"
}
