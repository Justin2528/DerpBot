const Discord = require("discord.js");
 const Giveaway = require("discord.js-giveaway");

module.exports.run = async (bot, message, args) => {

const giveaway = Giveaway(bot, { "giveawayRole": "giveaway", "reactEmote": "🎉" });

}

module.exports.config = {
  name: "giveaway",
  aliases: ["gift"],
  description: "Giveaway :D",
  usage: "d>giveaway",
  noalias: "No Aliases",
  accessableby: "I don't know..."
}
