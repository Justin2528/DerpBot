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


if(!body.player.stats.Bedwars) return message.channel.send(`ERROR 404: Uh, ${IGN} never player bedwars? (hypixel bedwars)`)



let image = "https://visage.surgeplay.com/full/" + body.player.uuid +".png"


console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Bedwars stats (Hypixel)")
.setColor("9b7653")
.setDescription(`${body.player.displayname}'s Bedwars stats`)
.setImage(image)
.addField("EXP", body.player.stats.Bedwars.Experience || "0", true)
.addField("Level", body.player.achievements.bedwars_level || "0", true)
.addField("Games Played", body.player.stats.Bedwars.games_played_bedwars || "0", true)
.addField("Beds Broken", body.player.stats.Bedwars.beds_broken_bedwars || "0", true)
.addField("Beds Lost", body.player.stats.Bedwars.beds_lost_bedwars || "0", true)
.addField("Kills (Overall)", body.player.stats.Bedwars.kills_bedwars || "0", true)
.addField("Final Kills", body.player.stats.Bedwars.final_kills_bedwars || "0", true)
.addField("Deaths (Overall)", body.player.stats.Bedwars.deaths_bedwars || "0", true)
.setThumbnail("https://hypixel.net/styles/hypixel-uix/hypixel/game-icons/BedWars-64.png")
.setFooter(offon, photo)

//.addField("", body.player.stats.Bedwars. || "0", true)

//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "bedwarstats",
  aliases: ["Bed?"],
  description: "yay bedwars (hypixel)",
  usage: "d>bedwarstats <IGN>",
  noalias: "No Aliases",
  accessableby: "memberssssss/giraffe/pitboi/Justin2528/duh"
}
