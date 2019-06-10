const Discord = require("discord.js");

const dogFacts = require('dog-facts');
 

module.exports.run = async (bot, message, args) => {
  let randomFact = dogFacts.random();
const ayy = bot.emojis.get("468044901913853963");
 let ok = new Discord.RichEmbed()
   .setTitle(`${ayy} DOG Fact!`)
  .setColor("RANDOM")
   .setDescription(randomFact)
   .setFooter("Derpbot Woof");
message.channel.send(ok)
}


module.exports.config = {
  name: "dogfact",
  aliases: ["dg"],
  description: "Dog Facts Woof",
  usage: "d>dogfact",
  noalias: "No Aliases",
  accessableby: "Dogs or Members"
}
