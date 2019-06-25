const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const db = require("quick.db")


module.exports.run = async (bot, message, args) => {
  //code here

    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

  if(!wUser) return message.reply("Couldn't find them yo");
    const numberwarn = new db.table('WARNNUMBERs')
    const num1 = await numberwarn.fetch(`user_${wUser.id}_${message.guild.id}`)
  if(!num1) num1[wUser.id] = {
    warns: 0
  };
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");

  let warnlevel = num1
  


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

