const Discord = require("discord.js");
let xp = require("../xp.json")

module.exports.run = async (bot, message, args, ops) => {
  //code here
  if(!xp[message.author.id]){
     xp[message.author.id] = {
       xp: 0,
      level: 1
        
     };
  }


   let curxp = xp[message.author.id].xp;
   let curlvl = xp[message.author.id].level;
   let nxtLvlXp = curlvl * 500;
 let diff = nxtLvlXp - curxp;
  let ok = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("PURPLE")
   .addField("Level", curlvl, true)
    .addField("XP", curxp, true)
  .setFooter(`${diff} XP til level up!`, message.author.displayAvatarURL)
 
 message.channel.send(ok).then(msg => {msg.delete(5500)});
}


module.exports.config = {
  name: "level",
  aliases: ["lvl"],
  description: "Check ur level!",
  usage: "d>level",
  noalias: "No Aliases",
  accessableby: "Members"
}

