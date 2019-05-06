const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
 var url = "https://api.hypixel.net/player?key=12986a35-ab5a-49f4-b23c-e6695ae3cfd1&name=" + IGN;

snekfetch.get(url).then(r => {
let body = r.body
});
  
}


module.exports.config = {
  name: "pitstats",
  aliases: ["Hypixel"],
  description: "Get ya boi's pit stats",
  usage: "d>pitstats <IGN>",
  noalias: "No Aliases",
  accessableby: "memberssssss/giraffe/pitboi/Justin2528/duh"
}
