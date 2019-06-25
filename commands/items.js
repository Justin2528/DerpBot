const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops) => {
  //code here
let user = message.mentions.members.first() || message.author;


  let item = await db.fetch(`item_${user.id}`)
  if (item === null) item = "Nothing";
  
 let ok = new Discord.RichEmbed()
 .setTitle("Chest")
 
  .setDescription(`${user} have ${item}.`, user.displayAvatarURL)
 .setColor("GREEN")
 .setFooter("DerpBot Bank")
 message.channel.send(ok)
  
}


module.exports.config = {
  name: "items",
  aliases: ["I"],
  description: "Check someone's / your items!",
  usage: "d>items",
  noalias: "No Aliases",
  accessableby: "Members"
}

