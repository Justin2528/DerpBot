const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops, guildconf) => {
  //code here
 if(!message.member.hasPermission(0x00000008)) return message.channel.send("You need Manage Message perms!")
  
  
    let configProps = Object.keys(guildconf).map(prop => {
      return `${prop}  :  ${guildconf[prop]}\n`;
    });
    message.channel.send(`The following are the server's current configuration:
    \`\`\`${configProps}\`\`\``);
}


module.exports.config = {
  name: "showconf",
  aliases: ["showc"],
  description: "show the server config!",
  usage: "d>showconfig",
  noalias: "No Aliases",
  accessableby: "Members"
}

