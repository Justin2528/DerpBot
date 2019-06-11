const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  //code here
 let cool = bot.emojis.get("450936886739861504");
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("NEED ADMIN PERMS!");
  
if(!args[0]) return message.channel.send("Uh... Air?")

 let ok = new Discord.RichEmbed()
   .setColor(0xffffff)
  .setFooter("React to vote!")
   .setDescription(args.join(' '))
   .setTitle(`Poll Created By ${message.author.username}`)

  let msg = await message.channel.send(ok);

   await msg.react("✅");
   await msg.react(cool)
   await msg.react("❌")

 message.delete()
 
}


module.exports.config = {
  name: "poll",
  aliases: ["vote"],
  description: "Create a pool!",
  usage: "d>poll <stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}
