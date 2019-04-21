const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {
  
  if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead!`);
  
  if(args[0]){
    let command = args[0];
    if(bot.commands.has(command)) {
      command = bot.commands.get(command);
      var SHembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`DerpBot Help`, message.guild.iconURL)
      .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n **Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
      message.channel.send(SHembed)
      }}
   
  if(!args[0]){
    message.delete();
    
    let embed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let Sembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`These are the avaliable commands for the DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands:`, "``serverinfo`` `help` `test2` `rps`, `mute`")
    .setFooter("DerpBot v0.3.9", bot.user.displayAvatarURL)
    message.channel.send(embed).then(m => m.delete(10000));
    message.author.send(Sembed);
  }
}


module.exports.config = {
  name: "help",
  aliases: ["h", "commands", "halp"],
  description: "",
  usage: "",
  noalias: "No Aliases",
  accessableby: "Members"
}
