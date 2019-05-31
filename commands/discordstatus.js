const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, what IS THE IGN????")

 var url = "";

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {


console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Discord Status")
.setColor("AQUA")
.addField("API", body.page.components.status)

//.addField("", body.page || "", true)

//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "discordstatus",
  aliases: ["DS"],
  description: "Discord Status :D",
  usage: "d>discordstatus",
  noalias: "No Aliases",
  accessableby: "Members"
}
