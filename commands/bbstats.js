const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, what IS THE IGN????")

 var url = "https://api.hypixel.net/player?key=" + process.env.APIKEY + "&name=" + IGN;

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body
if(!body) return message.channel.send("Nope.")

let offon = `${body.player.displayname} is offline!`
let photo = "https://images-ext-1.discordapp.net/external/UdWXoKUsaYCOyvH6nsDk03AdfJVWTK7cyQVvhqpoF3I/https/image.ibb.co/hwheRV/image.png"

if(body.player.lastLogout < body.player.lastLogin){
  offon = `${body.player.displayname} is online!`
  photo = "https://images-ext-1.discordapp.net/external/74xyeTgd4BElwkkoe92yB3zEwD1ln4N1rh2zeKxVwt8/https/image.ibb.co/h9VNfq/image.png"
} 


if(!body.player.stats.BuildBattle) return message.channel.send(`ERROR 404: Uh, ${IGN} never player build battle? (hypixel)`)



let image = "https://visage.surgeplay.com/full/" + body.player.uuid +".png"


console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Build battle stats (Hypixel)")
.setColor("9b7653")
.setDescription(`${body.player.displayname}'s Build battle stats`)
.setImage(image)
.addField("Game Played", body.player.stats.BuildBattle.games_played || "0", true)
.addField("Score", body.player.stats.BuildBattle.score || "0", true)
.addField("Coins", body.player.stats.BuildBattle.coins || "0", true)
.addField("Total Votes", body.player.stats.BuildBattle.total_votes|| "0", true)
.addField("Super Votes", body.player.stats.BuildBattle.super_votes || "0", true)
.addField("Correct Guesses", body.player.stats.BuildBattle.correct_guesses || "0", true)
.setThumbnail("https://hypixel.net/styles/hypixel-uix/hypixel/game-icons/BuildBattle-64.png")
.setFooter(offon, photo)

//.addField("", body.player.stats.BuildBattle. || "0", true)

//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "bbstats",
  aliases: ["bbs"],
  description: "yay Build battle (hypixel)",
  usage: "d>bbstats <IGN>",
  noalias: "No Aliases",
  accessableby: "memberssssss/giraffe/pitboi/Justin2528/duh"
}
