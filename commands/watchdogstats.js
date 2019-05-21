const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

var url = "https://api.hypixel.net/watchdogstats?key=" + process.env.APIKEY

const snekfetch = require("snekfetch");    


snekfetch.get(url).then(r => {
    let body = r.body

    let oke = body.watchdog_total+body.staff.total

    let ok = new Discord.RichEmbed()
   .setAuthor("Hypixel WatchDog Statistics")
   .addField("**Total Bans**", `Bans: \`${oke}\` \n WatchDog Bans: \`${body.watchdog_total}\` \n Staff Bans: \`${body.staff_total}\``)
  .addField("**Todays Bans**", `WatchDog Bans: \`${body.watchdog_rollingDaily}\` \n Staff Bans: \`${body.staff_rollingDaily}\` \n Last Minute: \`${body.watchdog_lastMinute}\``)
    .setThumbnail("https://vignette.wikia.nocookie.net/hypixelserver/images/9/94/Watchdog.png")
    .setFooter("Wow...")

message.channel.send(ok)
    
   });
}


module.exports.config = {
  name: "watchdogstats",
  aliases: [""],
  description: "Uh get it?",
  usage: "d>watchdogstats",
  noalias: "No Aliases",
  accessableby: "Members"
}
