const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args, ops) => {
  //code here
let timeout = 86400000
  let amount = 500
  
  let daily = await db.fetch(`daily_${message.guild.id}_${message.author.id}`);
  
  if(daily !== null && timeout - (Date.now() - daily) > 0){
    let time = ms(timeout - (Date.now() - daily));
   
    message.channel.send(`Hey! You already collected ur daily reward! Come back and collect it in **${time.hours}h ${time.minutes}m  ${time.seconds}s**!`)
  } else {
    let ok = new Discord.RichEmbed()
    .setAuthor("Daily!", message.author.displayAvatarURL)
    .setDescription("**Daily Reward!**")
    .setColor("RANDOM")
    .addField(`Collected`, amount)

   message.channel.send(ok)
    db.add(`money_${message.author.id}`, amount)
    db.add(`money_${message.guild.id}_${message.author.id}`, amount)
    db.set(`daily_${message.guild.id}_${message.author.id}`, Date.now())
  }
  
  
}


module.exports.config = {
  name: "daily",
  aliases: ["Money"],
  description: "Daily money!",
  usage: "d>daily",
  noalias: "No Aliases",
  accessableby: "Members"
}

