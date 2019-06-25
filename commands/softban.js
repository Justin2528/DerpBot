const Discord = require("discord.js");

module.exports.run = async (bot, message, args,dsettings) => {
message.delete()
  if(!message.member.hasPermissions("BAN_MEMBERS", "ADMINISTRATOR")) return message.reply(`||ERROR REPORT: ${message.author.username} HAVE NO BAN_MEMBERS PERMS.||`);
     
 bot.settings.ensure(message.guild.id, dsettings);
  

  let bane = message.mentions.members.first() || message.guild.members.get(args[0]);
  
  if(!bane) return message.reply(`Oh no! where is da bad boi? (if you don't understand, do d>help softban...)`);

 if(bane.hasPermission("BAN_MEMBERS")) return message.channel.send("That boi got perms... ");
  
  let reason = args.slice(1).join(" ");
  if(!reason) reason = "N̝̜̦̳̽͂͑̑o͇̻͈̓̋̀̓̐͟ͅ ͈̐ȑ͜e͗̀͟͢a̢̰̣̱̞͌̿̓̓͞s͙͚͔̓͌̓ò̲̳̏n̪͠ ̰̝͇̦͔̀͐̇͒͛g̞͈̭̙̋͌͗̅͟͞i̖̗͆̅v̹̐en!̮̦͉̈́̇̊"

let time = args.slice(2).join(" ");

if(!time) time = "1"


if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("Oh, I have no perms to ban people.... (Insert sad face here)");

bane.send(`Hello there, I'm sorry to tell you but you have been banned in ${message.guild.name} by ${message.author.username}. reason: ${reason}`).then(() =>
  message.guild.ban(bane, {days: time, reason: reason})).then(() => message.guild.unban(bane.id)).catch(err => message.channel.send(err))
    let derp = message.guild.channels.find("name", bot.settings.get(message.guild.id, "modLogChannel"))
       if(!derp) return message.channel.send("PLZ do d>setconf modLogChannel <Channel Name>. You need log right?")
derp.send(`**${bane.user.username}** has been banned by ${message.author.username}. reason: ${reason}`)
    .catch(console.error);




  
  
  
  }
// end of module


module.exports.config = {
  name: "softban",
  aliases: ["sb", "sbanish", "sremove"],
  description: "Ban some bad boi with time",
  usage: "d>softban <@user> <reason> <days>",
  noalias: "No Aliases",
  accessableby: "Staff(Need BAN_MEMBERS perms)/Admin"
}

