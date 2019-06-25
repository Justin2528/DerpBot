const Discord = require("discord.js");
const db = require("quick.db");
const giveaways = require('discord-giveaways');

module.exports.run = async (bot, message, args, ops, guildconf) => {
  //code here
if (!message.member.roles.some(role => role.name === 'giveaway')) return message.channel.send("Hey! you need the `giveaway` role!")
     let messageID = args[0];
        giveaways.reroll(messageID, {
    congrat: ":tada: New winner(s) : {winners}! Congratulations!",
    error: "No valid participations, no winners can be chosen!"
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
}


module.exports.config = {
  name: "greroll",
  aliases: ["Giveaway Reroll"],
  description: "Reroll the giveaway winner(s)!",
  usage: "d>greoll <Giveaway Message ID>",
  noalias: "No Aliases",
  accessableby: "Staff"
}

