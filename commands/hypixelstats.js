const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, where is da IGN????")

 var url = "https://api.hypixel.net/player?key=" + process.env.APIKEY + "&name=" + IGN;

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body

if(!body.player) return message.channel.send(`ERROR 404: Nopeee`)

var dateString1 = body.player.lastLogin.substr(6);
var currentTime1 = new Date(parseInt(dateString1 ));
var month1 = currentTime1.getMonth() + 1;
var day1 = currentTime1.getDate();
var year1 = currentTime1.getFullYear();
var date1 = day1 + "/" + month1 + "/" + year1;

var dateString2 = body.player.firstLogin.substr(6);
var currentTime2 = new Date(parseInt(dateString2 ));
var month2 = currentTime2.getMonth() + 1;
var day2 = currentTime2.getDate();
var year2 = currentTime2.getFullYear();
var date2 = day2 + "/" + month2 + "/" + year2;


let image = "https://visage.surgeplay.com/full/" + body.player.uuid +".png"


console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Hypixel stats (Minecraft Server)")
.setColor("9b7653")
.setDescription(`${IGN}'s Hypixel stats`)
.setImage(image)
.addField("first Login", date2, true)
.addField("last Login", date1, true)
.setFooter("We're adding more!")

//.addField("", body.player. || "0", true)

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
