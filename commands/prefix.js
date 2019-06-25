const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops) => {
//   //code here
// let ok = args[0]
// if(!ok) return message.channel.send("I have no idea what ur doing. I can't change to nothing")
//  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You need the `Administrator` Permission!**");
// let derp = message.guild.channels.find(`name`, "derp-logs");
//   db.set(`prefix_${message.guild.id}`, args[0]).then(i => {
    
//     let ok = new Discord.RichEmbed()
//    .setAuthor("Prefix Changed!")
//     .setColor("GREEN")
//     .setFooter("DerpBot Prefix || Reminder: d> is the orignal prefix <Change it back if u want> || Forgot the prefix? . . . Can't help you", bot.user.displayAvatarURL)
//     .setTimestamp()
//     .setDescription(`**Successfully changed the prefix to \`${i}\`!**`);
    
//     message.channel.send(ok)
//     if(!derp) return message.channel.send("No logs || Create `derp-logs` if you want log!")
//     derp.send(ok)
//   });
  
         
         }

module.exports.config = {
  name: "downprefix",
  aliases: ["pre"],
  description: "change the prefix!",
  usage: "d>prefix <stuff>",
  noalias: "No Aliases",
  accessableby: "Admin/Owner"
}

