const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


 var url = "https://status.mojang.com/check";

console.log(url);



const snekfetch = require("snekfetch");


snekfetch.get(url).then(r => {
let body = r.body

 let emoji1 = ":warning:"
  
if(body.minecraft_net === "green"){
    emoji1 = ":white_check_mark:"
}

console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Discord Status")
.setColor("AQUA")
.addField(emoji1, "minecraft.net", true)

//.addField("", || "", true)

//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "mcstatus",
  aliases: ["MS"],
  description: "Minecraft Status :D",
  usage: "d>mcstatus",
  noalias: "No Aliases",
  accessableby: "Members"
}
