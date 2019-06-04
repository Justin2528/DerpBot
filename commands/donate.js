const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let ok = new Discord.RichEmbed()
 .setColor("GREEN")
 .setDescription("[Donate Now!](https://www.paypal.me/DaJustin2528)")
 .setFooter("Or sent to justinhypixel@gmail.com")
 
 message.channel.send(ok)
}


module.exports.config = {
  name: "donate",
  aliases: ["D"],
  description: "Donate some money to Justin2528!",
  usage: "d>donate",
  noalias: "No Aliases",
  accessableby: "Members"
}
