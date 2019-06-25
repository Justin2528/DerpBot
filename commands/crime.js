const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms")

module.exports.run = async (bot, message, args, ops) => {
  //code here
let timeout = 180000

  let crimet = await db.fetch(`crimet_${message.guild.id}_${message.author.id}`);
  if(crimet !== null && timeout - (Date.now() - crimet) > 0){
    let time = ms(timeout - (Date.now() - crimet));
   
    return message.channel.send(`Hey! You already did something illegal today! Come back and do more illegal stuff in **${time.minutes}m ${time.seconds}s**!`);
    
  }
  
   let amount = Math.floor(Math.random() * 100) + 1;
        let chance = Math.floor(Math.random * 100) + 1;
        if (chance < 99) {
         message.channel.send(`OH NO! Because someone noticed that you're doing something illegal, the guy called the police! You got caught! \nYou lost \`${amount}$\``)
          db.subtract(`money_${message.author.id}`, amount);
db.subtract(`money_${message.guild.id}_${message.author.id}`, amount);
db.subtract(`money_${message.author.id}`, amount);
db.set(`crime_${message.guild.id}_${message.author.id}`, Date.now());
} else 
  message.channel.send(`Nice! You robbed the bank! \nYou earned \`${amount}$\`!`)
   db.add(`money_${message.author.id}`, amount);
  db.add(`money_${message.guild.id}_${message.author.id}`, amount)
db.set(`crimet_${message.guild.id}_${message.author.id}`, Date.now());


  

}


module.exports.config = {
  name: "crime",
  aliases: ["illegal"],
  description: "*Ring ring,* Hello? is anybody here? It's kinda dark here. so about the d>crime command is just do something illegal. Got it? ok good. pce! *click*",
  usage: "d>crime",
  noalias: "No Aliases",
  accessableby: "Members"
}

