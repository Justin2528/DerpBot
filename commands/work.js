const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms")

module.exports.run = async (bot, message, args, ops) => {
  //code here
let timeout = 60000


  let workt = await db.fetch(`workt_${message.guild.id}_${message.author.id}`);
  if(workt !== null && timeout - (Date.now() - workt) > 0){
    let time = ms(timeout - (Date.now() - workt));
   
    return message.channel.send(`Hey! You already worked today! Come back and work in **${time.seconds}s**!`);
    
  }
  
   let amount = Math.floor(Math.random() * 500) + 1;

  
  let ok = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}, it paid off!`, message.author.displayAvatarURL)
  .setDescription(`${message.author}, you've worked and earned ${amount}$!`)
  .setColor("RANDOM")

   message.channel.send(ok);
db.add(`money_${message.author.id}`, amount);
db.add(`money_${message.guild.id}_${message.author.id}`, amount);
  db.set(`workt_${message.guild.id}_${message.author.id}`, Date.now());

}


module.exports.config = {
  name: "work",
  aliases: ["w"],
  description: "Work for money!",
  usage: "d>work",
  noalias: "No Aliases",
  accessableby: "Memebers"
}

