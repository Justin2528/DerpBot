const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops, guildconf) => {
  //code here
  if(!message.member.hasPermission(0x00000008)) return message.channel.send("You need the Admin Perms!");
      let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!user) return message.channel.send("Plz, who is the guy.")
      const numberwarn = new db.table('WARNNUMBERs')
    const num1 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
    if(!args[1]){
      return message.channel.send("Plz tell me how many warns need to be clear to that guy")
    }
numberwarn.subtract(`user_${user.id}_${message.guild.id}`, Number(args[1])).catch(console.error)
  message.channel.send("Done!")
}


module.exports.config = {
  name: "clearwarn",
  aliases: ["cw"],
  description: "Guys, no more warn for u. CUS I JUST REMOVED 1 WARN. YOU STILL HAVE 2 WARN",
  usage: "d>clearwarn <guy> <amount>",
  noalias: "No Aliases",
  accessableby: "Staff"
}

