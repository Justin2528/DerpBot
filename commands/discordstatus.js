const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


 var url = "https://srhpyqt94yxb.statuspage.io/api/v2/summary.json";

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body

console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Discord Status")
.setColor("AQUA")
.addField("API", body.page.components..status)

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
