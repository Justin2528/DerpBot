const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let ew = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("[GLITCH!!!!!](https://glitch.com/#!/derpbot-discord)")
  .setFooter("HYPEEEE!!!!!!")
  message.channel.send(ew);
}


module.exports.config = {
  name: "glitch",
  aliases: ["g"],
  description: "Hoi",
  usage: "No usage",
  noalias: "No Aliases",
  accessableby: "Members"
}
