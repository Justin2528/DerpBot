const Discord = require("discord.js");
const api = "https://my-json-server.typicode.com/Justin2528/JSON101/posts";
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
  snekfetch.get(api).then(r => {
    let body = r.body
    let id = Number(args[0]);
    if(!id) return message.channel.send("Where is da ID?")
    if(isNaN(id)) return message.channel.send(". . . Real Number pLZ");
    
    let entry = body.find(post => post.id === id);
    if(!entry) return message.channel.send("This entry does not exist!");
    
    let ok = new Discord.RichEmbed()
    .setAuthor(entry.title)
    .setDescription(entry.body)
    .setFooter("Update:" + entry.id);
    
    message.channel.send(ok)
    });
}


module.exports.config = {
  name: "update",
  aliases: ["update"],
  description: "Uh get it?",
  usage: "d>changelog <entryID>",
  noalias: "No Aliases",
  accessableby: "Members"
}
