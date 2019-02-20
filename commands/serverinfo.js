const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("server Info")
  .setThumbnail(message.guild.iconURL)
  .setAuthor(`${message.guild.name} Info`, message.guild.IconURL)
  .addField("**Guild Name:**", `${message.guild.name}`, true)
  .addField("**Guild Owner:**", `${message.guild.owner}`, true)
  .addField("**Member Count:**", `${message.guild.memberCount}`, true)
  .addField("**Role Count**", `${message.guild.roles.size}`, true)
  .setFooter(`DerpBot | Footer`, bot.user.displayAvatarURL)
  message.channel.send(sEmbed)
  
}


module.exports.config = {
  name: "serverinfo",
  aliases: ["si", "serverdesc"],
  description: "Server Info",
  usage: "derp>serverinfo",
  accessableby: "Members"

}
