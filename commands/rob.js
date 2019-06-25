const Discord = require("discord.js");
const db = require("quick.db");
let ms = require("parse-ms");

module.exports.run = async (bot, message, args, ops) => {
  //code here

  let user = message.mentions.members.first()
if(!user) return message.channel.send("Who To Rob?")
  let targetuser = await db.fetch(`money_${user.id}`)
  let author = await db.fetch(`money_${message.author.id}`)
let timeout = 86400000


  let robt = await db.fetch(`robt_${message.author.id}`);
  if(robt !== null && timeout - (Date.now() - robt) > 0){
    let time = ms(timeout - (Date.now() - robt));
   
    return message.channel.send(`Hey! You already robbed Someone today! Come back and rob someone again in **${time.hours}h ${time.minutes}m  ${time.seconds}s**!`)
  }
  

  
  if(author < 250) {
    
    return message.channel.send("Sorry! You atleast need 250$ to rob somebody!").then(msg => {msg.delete(4000)});
    
    
  }
  
   if(targetuser < 0 || targetuser === null) {
   return message.channel.send(`Sorry! ${user.user.username} does not have nothing to rob!`)
   }

  let random = Math.floor(Math.random() * 200) + 1;

 let ok = new Discord.RichEmbed()
 .setDescription(`${message.author} robbed ${user} and got away with ${random}$! ${user} now have ${targetuser}`)
 .setColor("GREEN")
 .setTimestamp()
 message.channel.send(ok)
  
  db.subtract(`money_${user.id}`, random)
db.subtract(`money_${message.guild.id}_${user.id}`, random)
  db.add(`money_${message.author.id}`, random)
  db.add(`money_${message.guild.id}_${message.author.id}`, random)
  
      db.set(`robt_${message.guild.id}_${message.author.id}`, Date.now());

}


module.exports.config = {
  name: "rob",
  aliases: ["r"],
  description: "ROB SOME PPLS!",
  usage: "d>rob <@stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}

