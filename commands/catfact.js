    
const Discord = require("discord.js");

const catFacts = require('cat-facts');
 

module.exports.run = async (bot, message, args) => {
  let randomFact = catFacts.random();
const ayy = bot.emojis.get("468044901913853963");
 let ok = new Discord.RichEmbed()
   .setTitle(`${ayy} DOG Fact!`)
  .setColor("RANDOM")
   .setDescription(randomFact)
   .setFooter("Derpbot Meow");
message.channel.send(ok)
}


module.exports.config = {
  name: "catfact",
  aliases: ["cg"],
  description: "Cat Fact Meow",
  usage: "d>catfact",
  noalias: "No Aliases",
  accessableby: "Cats or Members"
}
