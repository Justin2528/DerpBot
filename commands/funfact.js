const Discord = require("discord.js");
var rf = require('random-facts');
module.exports.run = async (bot, message, args) => {
  let ok = new Discord.RichEmbed()
   .setTitle("Fun Fact!")
  .setColor("RANDOM")
   .setDescription(rf)
   .setFooter("Derpbot 101");

   message.channel.send(ok)
}


module.exports.config = {
  name: "funfact",
  aliases: ["ff"],
  description: "Fun fact. Yep",
  usage: "d>funfact",
  noalias: "No Aliases",
  accessableby: "Members"
}
