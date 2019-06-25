const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops, guildconf) => {
  //code here
  if (bot.guilds.size < 15) return;
  
const top = bot.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
let ok = new Discord.RichEmbed()
.setColor("GREEN")
.setTitle("Top 15 Guilds")
.setFooter("DerpBot Guilds", bot.user.displayAvatarURL)
  .setDescription(`1. **${top[0].name}**: ${top[0].memberCount} Members.\n2. **${top[1].name}**: ${top[1].memberCount} Members.\n3. **${top[2].name}**: ${top[2].memberCount} Members.\n4. **${top[3].name}**: ${top[3].memberCount} Members.\n5. **${top[4].name}**: ${top[4].memberCount} Members.\n6. **${top[5].name}**: ${top[5].memberCount} Members.\n7. **${top[6].name}**: ${top[6].memberCount} Members.\n8. **${top[7].name}**: ${top[7].memberCount} Members.\n9. **${top[8].name}**: ${top[8].memberCount} Members.\n10. **${top[9].name}**: ${top[9].memberCount} Members.\n11. **${top[10].name}**: ${top[10].memberCount} Members.\n12. **${top[11].name}**: ${top[11].memberCount} Members.\n13. **${top[12].name}**: ${top[12].memberCount} Members.\n14. **${top[13].name}**: ${top[13].memberCount} Members.\n15. **${top[14].name}**: ${top[14].memberCount} Members.`);
  
message.channel.send(ok);
}


module.exports.config = {
  name: "top15servers",
  aliases: ["T1S"],
  description: "Top 15 Guilds! (Most Members)",
  usage: "d>top15servers",
  noalias: "No Aliases",
  accessableby: "Members"
}

