const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //code here
  let ok = new Discord.RichEmbed()
 .setTitle("Partners")
 .setDescription("[Hyper (Discord Server)](https://discord.gg/KVVvaqn)\n [{TheSourceCode} (Discord Server)](https://discord.gg/nbjYAvq)\n [[MenuDocs] (Discord Server)](https://discord.gg/h4X9eNY)")
 .setFooter("DerpBot Partners")
  
}


module.exports.config = {
  name: "partner",
  aliases: ["partner"],
  description: "Ayeee",
  usage: "d>partner",
  noalias: "No Aliases",
  accessableby: "Members"
}
