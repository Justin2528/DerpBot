const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


 var url = "";

console.log(url);



const snekfetch = require("snekfetch");


snekfetch.get(url).then(r => {
let body = r.body


console.log(body)

let ok = new Discord.RichEmbed()

//.addField("", || "", true)

//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "1",
  aliases: ["1"],
  description: "1",
  usage: "1",
  noalias: "No Aliases",
  accessableby: "1"
}
