const Discord = require("discord.js");
const db = require("quick.db");
const Doc = require('discord.js-docs');

module.exports.run = async (bot, message, args, ops) => {
  //code here
const doc = await Doc.fetch('main', 'stable')


  if(!args[0]){
  return message.channel.send("I can't search ur stuff. `AIR`")
}
let ok = await doc.search(args).catch(console.error)
  message.channel.send(ok).catch(console.error)
console.log(doc).catch(console.error)
}


module.exports.config = {
  name: "djs-docs",
  aliases: ["Discord.js Docs"],
  description: "Discord.js Docs in command. wew",
  usage: "d>djs-docs <search stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}

