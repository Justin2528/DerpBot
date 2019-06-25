const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops, guildconf) => {
  //code here
if(!message.member.hasPermission(0x00000008)) {
  return message.channel.send("You don't have the `Administrator` Perms!")
}
  
      const [prop, ...value] = args;

   if(!args[0]){
 return message.channel.send("I can't set to air! (Setting: prefix / (leaveMessage/welcomeMessage <use {{user}} if you want to do like (Welcome Justin2528#9111!)>) / (leaveChannel/welcomeChannel <say the channel name. not #Shrey87>))");
    }

       if(!bot.settings.has(message.guild.id, prop)) {
      return message.reply("This key is not in the configuration.");
    }

  if(!args[1]){
    return message.channel.send("Value plz?")
  }
  
  
   bot.settings.set(message.guild.id, value.join(" "), prop);
  
    message.channel.send(`Guild configuration item ${prop} has been changed to:\n\`${value.join(" ")}\``);
}


module.exports.config = {
  name: "setconf",
  aliases: ["sc"],
  description: "Set Server Config ",
  usage: "d>setconf <setting> <value>",
  noalias: "No Aliases",
  accessableby: "Admin"
}

