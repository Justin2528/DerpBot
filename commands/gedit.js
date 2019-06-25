const Discord = require("discord.js");
const db = require("quick.db");
const giveaways = require('discord-giveaways');
const ms = require("ms");

module.exports.run = async (bot, message, args, ops, guildconf) => {
  //code here
if (!message.member.roles.some(role => role.name === 'giveaway')) return message.channel.send("Hey! you need the `giveaway` role!")

        let messageID = args[0];
        giveaways.edit(messageID, {
            newWinnersCount: args[1],
            newPrize: args[3],
            addTime: args[2]
        });
}


module.exports.config = {
  name: "gedit",
  aliases: ["Giveaway Edit"],
  description: "Edit the giveaway!",
  usage: "d>gedit <Giveaway Message ID> <New winners count> <Time || Do (MS) -5000 to reduce time> <Prize>",
  noalias: "No Aliases",
  accessableby: "Staff"
}

