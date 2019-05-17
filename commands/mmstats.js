const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, what IS THE IGN????")

 var url = "https://api.hypixel.net/player?key=" + process.env.APIKEY + "&name=" + IGN;

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body

let offon = `${body.player.displayname} is offline!`
let photo = "https://images-ext-1.discordapp.net/external/UdWXoKUsaYCOyvH6nsDk03AdfJVWTK7cyQVvhqpoF3I/https/image.ibb.co/hwheRV/image.png"

if(body.player.lastLogout < body.player.lastLogin){
  offon = `${body.player.displayname} is online!`
  photo = "https://images-ext-1.discordapp.net/external/74xyeTgd4BElwkkoe92yB3zEwD1ln4N1rh2zeKxVwt8/https/image.ibb.co/h9VNfq/image.png"
} 


if(!body.player.stats.Bedwars) return message.channel.send(`ERROR 404: Uh, ${IGN} never player bedwars? (hypixel bewars)`)



let image = "https://visage.surgeplay.com/full/" + body.player.uuid +".png"


console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Murder Mystery stats (Hypixel)")
.setColor("9b7653")
.setDescription(`${body.player.displayname}'s Murder Mystery stats`)
.setImage(image)
.addField("Bow Kills (Overall)", body.player.stats.MurderMystery.bow_kills || "0", true)
.addField("Knife Kills (Overall)", body.player.stats.MurderMystery.knife_kills || "0", true)
.addField("Thrown Knife kills", body.player.stats.MurderMystery.thrown_knife_kills || "0", true)
.addField("Trap Kills", body.player.stats.MurderMystery.trap_kills || "0", true)
.addField("Wins (Overall)", body.player.stats.MurderMystery.wins || "0", true)
.setFooter(offon, photo)

//.addField("", body.player.stats.MurderMystery. || "0", true)

//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "mmstats",
  aliases: ["Murder u"],
  description: "Oof murder mystery (hypixel)",
  usage: "d>bed <IGN>",
  noalias: "No Aliases",
  accessableby: "memberssssss/giraffe/pitboi/Justin2528/duh"
}
