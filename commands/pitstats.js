const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, what IS UR IGN????")

 var url = "https://api.hypixel.net/player?key=12986a35-ab5a-49f4-b23c-e6695ae3cfd1&name=" + IGN;

console.log(url);

snekfetch.get(url).then(r => {
let body = r.body

let ok = new Discord.RichEmbed()
.setTitle("Pit stats (Hypixel)")
.setColor("9b7653")
.setDescription(`${IGN}'s Pit stats`)
.addField("Play time (mins)", body.player.pit_stats_ptl.playtime_minutes)
.addField("Enderchest open times", body.player.pit_stats_ptl.enderchest_opened)
.addField("Joins", body.player.pit_stats_ptl.joins)
.addField("Diamond Items purchased", body.player.pit_stats_ptl.diamond_items.purchased)
.addField("Chat Messages", body.player.pit_stats_ptl.chat_message)
.addField("Gold earned", body.player.pit_stats_ptl.cash_earned)
.addField("Fishing Rod Launched", body.player.pit_stats_ptl.fishing_rod_launched)
.setFooter("We're adding more!")

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
