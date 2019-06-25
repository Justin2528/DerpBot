const Discord = require("discord.js");
const db = require("quick.db");
const exec = require('child_process').exec;


module.exports.run = async (bot, message, args, ops, guildconf) => {
  //code here
    if (message.author.id !== "386490806716071946") return message.channel.send("Only owners can use this command")
  if(!args[0])return message.channel.send("Executed Air")
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      message.channel.send(`Ran: ${args.join(" ")}\n${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
     
    });
}


module.exports.config = {
  name: "execute",
  aliases: ["No Aliases"],
  description: "No Description",
  usage: "???",
  noalias: "No Aliases",
  accessableby: "Bot Owner"
}

