const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //code here
const ayy = bot.emojis.get("468044901913853963");
  let ok = new Discord.RichEmbed()


 .setTitle("${ayy} Partners")
 .setDescription("[Hyper (Discord Server)](https://discord.gg/KVVvaqn)\n [{TheSourceCode} (Discord Server)](https://discord.gg/nbjYAvq)\n [[MenuDocs] (Discord Server)](https://discord.gg/h4X9eNY)")
 .setFooter("DerpBot Partners")
 
 
 message.channel.send(ok)
}


module.exports.config = {
  name: "partner",
  aliases: ["partner"],
  description: "Ayeee",
  usage: "d>partner",
  noalias: "No Aliases",
  accessableby: "Members"
}
