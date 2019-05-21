const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, what IS THE IGN????")

 var url = "http://api.hivemc.com/v1/player/" + IGN;



console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body
let offon = `${body.username} is offline!`
let photo = "https://images-ext-1.discordapp.net/external/UdWXoKUsaYCOyvH6nsDk03AdfJVWTK7cyQVvhqpoF3I/https/image.ibb.co/hwheRV/image.png"

if(body.lastLogout < body.lastLogin){
  offon = `${body.username} is online!`
  photo = "https://images-ext-1.discordapp.net/external/74xyeTgd4BElwkkoe92yB3zEwD1ln4N1rh2zeKxVwt8/https/image.ibb.co/h9VNfq/image.png"
} 


if(!body.username) return message.channel.send("ERROR 404: 100% nope") 



let image = "https://visage.surgeplay.com/full/" + body.UUID +".png"


console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("The Hive Stats (Minecraft Server)")
.setColor("9b7653")
.setDescription(`${body.username}'s The Hive stats`)
.setImage(image)
.addField("Cank", body.rankName || "NON", true)
.addField("Tokens", body.tokens || "0", true)
.addField("Credits", body.credits || "0", true)
.addField("Medals", body.medals || "0", true)
.setThumbnail("https://i.imgur.com/VQJW6XG.png")
.setFooter(offon, photo)

//.addField("", body. || "0", true)

//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "thehivestats",
  aliases: ["Oof"],
  description: "I know what are you thinking",
  usage: "d>thehivestats <IGN>",
  noalias: "No Aliases",
  accessableby: "Rare people"
}
