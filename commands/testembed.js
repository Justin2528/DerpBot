const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("DerpBot Test Done")
  
  message.reply("Reply Test Done")
  
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Test")
  .setAuthor("Test")
  .setDescription("Test")
  .setFooter("Test")
  .addField("Te","st", true)
  
  message.channel.send(embed)
}


module.exports.config = {

  name: "test2",
  aliases: ["test"],
  description: "Testing",
  usage: "d>test2",
  noalias: "No Aliases",
  accessableby: "Members"
}
