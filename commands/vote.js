const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let ew = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("[VOTEE!!!!!](https://discordbots.org/bot/547771680798539776/vote)")
  .setFooter("HYPEEEE!!!!!!")
  message.channel.send(ew);
}


module.exports.config = {
  name: "vote",
  aliases: ["gud"],
  description: "Vote for hype.",
  usage: "d>vote",
  noalias: "No Aliases",
  accessableby: "Members"
}
