const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops) => {
  //code here
let user = message.mentions.members.first() || message.author;

    let bal = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if (bal === null) bal = 0;




  let money = await db.fetch(`money_${user.id}`)
  if (money === null) money = "0"
  
 let ok = new Discord.RichEmbed()
 .setTitle("Bank!")
 
  .setDescription(`${user} have ${money}$(Global) / ${bal}$(Server)! `, user.displayAvatarURL)
 .setColor("GREEN")
 .setFooter("DerpBot Bank")
 message.channel.send(ok)
  
}


module.exports.config = {
  name: "bal" || "balance",
  aliases: ["Money"],
  description: "Check ya money!",
  usage: "d>bal / d>balance",
  noalias: "No Aliases",
  accessableby: "Members"
}

