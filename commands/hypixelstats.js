const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, where is da IGN????")

 var url = "https://api.hypixel.net/player?key=" + process.env.APIKEY + "&name=" + IGN;

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body

let offon = "Player is offline!"
let photo = "https://images-ext-1.discordapp.net/external/UdWXoKUsaYCOyvH6nsDk03AdfJVWTK7cyQVvhqpoF3I/https/image.ibb.co/hwheRV/image.png"

if(body.player.lastLogout < body.player.lastLogin){
  offon = "Player is online!"
  photo = "https://images-ext-1.discordapp.net/external/74xyeTgd4BElwkkoe92yB3zEwD1ln4N1rh2zeKxVwt8/https/image.ibb.co/h9VNfq/image.png"
} 


if(!body.player) return message.channel.send(`ERROR 404: Nopeee`)

if(!body.player.lastLogin) return message.channel.send("101 NOPE");
if(!body.player.firstLogin) return message.channel.send("NOPE");

var dateString1 = body.player.lastLogin
var currentTime1 = new Date(parseInt(dateString1 ));
var month1 = currentTime1.getMonth() + 1;
var day1 = currentTime1.getDate();
var year1 = currentTime1.getFullYear();
var date1 = day1 + "/" + month1 + "/" + year1;

var dateString2 = body.player.firstLogin
var currentTime2 = new Date(parseInt(dateString2 ));
var month2 = currentTime2.getMonth() + 1;
var day2 = currentTime2.getDate();
var year2 = currentTime2.getFullYear();
var date2 = day2 + "/" + month2 + "/" + year2;

var dateString3 = body.player.lastLogout
var currentTime3 = new Date(parseInt(dateString3 ));
var month3 = currentTime3.getMonth() + 1;
var day3 = currentTime3.getDate();
var year3 = currentTime3.getFullYear();
var date3 = day3 + "/" + month3 + "/" + year3;



let image = "https://visage.surgeplay.com/full/" + body.player.uuid +".png"



console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Hypixel stats (Minecraft Server)")
.setColor("9b7653")
.setDescription(`${IGN}'s Hypixel stats`)
.setImage(image)
.setThumbnail("https://hypixel.net/styles/hypixel-uix/hypixel/platform-pc.png")
.addField("First Login", date2, true)
.addField("Last Login", date1, true)
.addField("Last Logout", date3, true)
.addField("Display Name", body.player.displayname || "0", true)
.addField("Rank", body.player.newPackageRank || "NON", true)
.addField("Network EXP", body.player.networkExp || "0", true)
.addField("Karma", body.player.karma || "0", true)
.addField("Most Recent Game Type", body.player.mostRecentGameType || "NONE", true)
.addField("Known Aliases", body.player.knownAliases || "NONE", true)
.setFooter(offon, photo)



//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "hypixelstats",
  aliases: ["Hypixel"],
  description: "Hypixel stats... that's all",
  usage: "d>hypixelstats <IGN>",
  noalias: "No Aliases",
  accessableby: "memberssssss/giraffe/pitboi/Justin2528/duh"
}
