const Discord = require("discord.js");
 const Giveaway = require("discord.js-giveaway");


module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.find(r => r.name === "giveaway"){
  return message.channel.send("You need da `giveaway` role!")
}

const giveaway = Giveaway(bot, {giveawayRole: "giveaway", reactEmote: "🎉"});
  message.channel.send(giveaway)
}


module.exports.config = {
  name: "giveaway",
  aliases: ["gift"],
  description: "Giveaway :D",
  usage: "d>giveaway",
  noalias: "No Aliases",
  accessableby: "I don't know..."
}
