const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
const prefix = botconfig.prefix

module.exports.run = async (bot, message, args) => {


  
  if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead!`);
if(args[0] == "cool") return message.channel.send("No such command call `cool`");
    if(args[0] == "fun"){
        let gembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let Gembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Games || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`🎮 Fun commands`, " `minesweeper` `mcachievement` `yesorno` `quiz` `meme` `cat` `dog` `1vs1` `8ball` `kill` `slots` `rate`")
        .setFooter("DerpBot v1.1", bot.user.displayAvatarURL)
     message.channel.send(gembed).then(m => m.delete(10000));
    return message.author.send(Gembed);
    }
    if(args[0] == "beta"){
        let eembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let Bembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`🛠 Beta Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `welp no commands are here...`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.1", bot.user.displayAvatarURL)
     message.channel.send(eembed).then(m => m.delete(10000));
    return message.author.send(Bembed);
    }
   if(args[0] == "thehive"){
        let heeembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let HIembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`The Hive Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `thehivestats`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.1", bot.user.displayAvatarURL)
     message.channel.send(heeembed).then(m => m.delete(10000));
    return message.author.send(HIembed);
    }
if(args[0] == "staff"){
        let membed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)
    
    let STembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`⛏ Staff Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `mute` `ban` `softban` `unban` `purge`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.1", bot.user.displayAvatarURL)
     message.channel.send(membed).then(m => m.delete(10000));
    return message.author.send(STembed);
    }

    if(args[0] == "hypixel"){
        let hembed = new Discord.RichEmbed()
    .setAuthor("Help Command!", message.guild.iconURL)
    .setColor("RANDOM")
    .setDescription(`${message.author.username} check your DMs! 📬`)

      let Hiembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`DerpBot Help`, message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setTimestamp()
    .setDescription(`Beta Commands || DerpBot\n The bot prefix is: ${prefix}`)
    .addField(`Commands`,' `pitstats (The first command that I created)` `watchdogstats` `hypixelstats` `bedwarstats` `mmstats (new! But it only got win. Am adding more)`')
    .addField(`Note:` , `Tell JuStIn2528#9111 if there was something wrong with the command!`)
        .setFooter("DerpBot v1.1", bot.user.displayAvatarURL)
     message.channel.send(hembed).then(m => m.delete(10000));
    return message.author.send(Hiembed);
    }
  
  if(args[0]){
    let command = args[0];
    if(bot.commands.has(command)) {
      command = bot.commands.get(command);
      var SHembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(`DerpBot Help`, message.guild.iconURL)
      .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.config.name}\n**Description:** ${command.config.description || "No Description"}\n**Usage:** ${command.config.usage || "No Usage"}\n **Accessable by:** ${command.config.accessableby || "Members"}\n**Aliases:** ${command.config.noalias || command.config.aliases}`)
     .setFooter("DerpBot v1.1", bot.user.displayAvatarURL)
    
      return message.channel.send(SHembed)
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
    .addField("Note:", "eval and reload can be use my bot owner. So uh just look at them and do nothing.")
    .addField(`Commands:`, "``serverinfo`` `help` `test2` `rps` `kick` `ping` `uptime` (`eval` `reload`) `invite` `npm` `vote` `invitelist` `createinvite` `weather`")
    .addField(`🎮 Psst!`, `Do d>help games for games!`)
    .addField(`🛠 Are you a tester?`, `Do d>help beta for some commands that are not release!`)
    .addField("⛏ You're a staff?", 'Do d>help staff!')

.addField("Hypixel stats?", `Do d>help hypixel!`)
.addField("Uh, the hive stats?", `Do d>help thehive!`)
  
        .setFooter("DerpBot v1.1", bot.user.displayAvatarURL)
    message.channel.send(embed).then(m => m.delete(10000));
    message.author.send(Sembed);
  }
   if(args[0] == "justin"){
  return message.delete();
    let boi = new Discord.RichEmbed()
    .setColor("red")
    .setFooter("Psst! You found a secret command! `cool`")
  message.author.send(boi);
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
