const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, what IS UR IGN????")

 var url = "https://api.hypixel.net/player?key=" + process.env.APIKEY + "&name=" + IGN;

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body

if(!body.player.stats.Pit) return message.channel.send(`ERROR 404: Uh, ${IGN} never player pit? (hypixel pit)`)

if(body.player === "null") return message.channel.send("ERROR 404: ${IGN} is not a player...")

let image = "https://visage.surgeplay.com/full/" + body.player.uuid +".png"

let hours = Math.floor(body.player.stats.Pit.pit_stats_ptl.playtime_minutes / 60);

console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Pit stats (Hypixel)")
.setColor("9b7653")
.setDescription(`${IGN}'s Pit stats`)
.addField("XP", body.player.stats.Pit.profile.xp || "0", true)
.addField("Play time (hour)", hours, true)
.setImage(image)
.addField("Enderchest open times", body.player.stats.Pit.pit_stats_ptl.enderchest_opened || "0", true)
.addField("Joins", body.player.stats.Pit.pit_stats_ptl.joins, true)
.setThumbnail("https://hypixel.net/styles/hypixel-uix/hypixel/game-icons/Prototype-64.png")
.addField("Diamond Items purchased", body.player.stats.Pit.pit_stats_ptl.diamond_items_purchased || "0", true)
.addField("Chat Messages", body.player.stats.Pit.pit_stats_ptl.chat_messages || "0", true)
.addField("Gold earned", body.player.stats.Pit.pit_stats_ptl.cash_earned || "0", true)
.addField("Fishing Rod Launched", body.player.stats.Pit.pit_stats_ptl.fishing_rod_launched || "0", true)
.addField("Left Clicks", body.player.stats.Pit.pit_stats_ptl.left_clicks || "0", true)
.addField("Launched by launchers", body.player.stats.Pit.pit_stats_ptl.launched_by_launchers || "0", true)
.addField("Deaths", body.player.stats.Pit.pit_stats_ptl.deaths || "0", true)
.setFooter("We're adding more!")

//.addField("", body.player.stats.Pit.pit_stats_ptl. || "0", true)

//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "pitstats",
  aliases: ["Hypixel"],
  description: "Get ya boi's pit stats",
  usage: "d>pitstats <IGN>",
  noalias: "No Aliases",
  accessableby: "memberssssss/giraffe/pitboi/Justin2528/duh"
}
