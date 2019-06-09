const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.channel.type === "dm") return message.channel.send("Sorry! But this command `ban` don't work in DM!");
message.delete()
  if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply(`||ERROR REPORT: ${message.author.username} HAVE NO BAN_MEMBERS PERMS.||`);
     


  let bane = message.mentions.members.first() || message.guild.members.get(args[0]);
  
  if(!bane) return message.reply(`Oh no! where is da bad boi? (if you don't understand, do d>help ban...)`);

 if(bane.hasPermission("BAN_MEMBERS")) return message.channel.send("That boi got perms... ");
  
  let reason = args.slice(1).join(" ");
  if(!reason) reason = "N̝̜̦̳̽͂͑̑o͇̻͈̓̋̀̓̐͟ͅ ͈̐ȑ͜e͗̀͟͢a̢̰̣̱̞͌̿̓̓͞s͙͚͔̓͌̓ò̲̳̏n̪͠ ̰̝͇̦͔̀͐̇͒͛g̞͈̭̙̋͌͗̅͟͞i̖̗͆̅v̹̐en!̮̦͉̈́̇̊"

if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.reply("Oh, I have no perms to ban people.... (Insert sad face here)");

bane.send(`Hello there, I'm sorry to tell you but you have been banned in ${message.guild.name} by ${message.author.username}. reason: ${reason}`)
  message.guild.member(bane).ban(reason);

message.channel.send(`**${bane.user.username}** has been banned by ${message.author.username}. reason: ${reason}`);


    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bane} with ID ${bane.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let derp = message.guild.channels.find(`name`, "derp-logs");
    if(!derp) return message.channel.send("Can't find `derp-logs`. There will be no logs...");

          derp.send(banEmbed)
  
  
  }
// end of module


module.exports.config = {
  name: "ban",
  aliases: ["b", "banish", "remove"],
  description: "Ban some bad boi.",
  usage: "d>ban <@user> <reason>",
  noalias: "No Aliases",
  accessableby: "Staff(Need BAN_MEMBERS perms)/Admin"
}

