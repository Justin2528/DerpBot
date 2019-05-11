const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent");
const meme = require("memejs");


module.exports.run = async (bot, message, args) => {

  meme(function(data) {
  const embed = new Discord.RichEmbed()
  .setTitle(data.title[0])
  .setColor("RANDOM")
  .setImage(data.url[0])
  message.channel.send({embed});
  })

   

}


module.exports.config = {
    name: "meme",
    noalias: "No Aliases",
    description: "Meme ¯\_(ツ)_/¯",
    usage: "d>meme",
    accessableby: "Members",
    aliases: ["m", "joke"]
}
