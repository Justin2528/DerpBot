const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  //code here

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

  if(!wUser) return message.reply("Couldn't find them yo");

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");

  let warnlevel = warns[wUser.id].warns;
  


  message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);
}


module.exports.config = {
  name: "warnlevel",
  aliases: ["wl"],
  description: "Check how many warns that guy have.",
  usage: "d>warnlevel ",
  noalias: "No Aliases",
  accessableby: "Staff (With manage messages perms)"
}

