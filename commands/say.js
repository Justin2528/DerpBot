const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  //!say Hi!
  //Hi
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

module.exports.config = {
  name: "say",
  aliases: ["s"],
  description: "say stuff",
  usage: "d>say <stuff>",
  noalias: "No Aliases",
  accessableby: "Staff"
}