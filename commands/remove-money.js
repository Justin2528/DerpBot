const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops) => {
  //code here
   if (!message.member.hasPermission('MANAGE_GUILD')) { // if message.author / member does not have the permission MANAGE_GUILD, return.
        return message.channels.send('You\'re missing the permission `MANAGE_GUILD` to use this command.').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 2500); // delete after 2.5 seconds.
        })
    }

    let user = message.mentions.members.first() || message.author
     
    if (isNaN(args[0])) return message.channel.send(`${message.author}, you need to input a valid number to remove.`) // if args[0] (first input) is not a number, return.
    db.subtract(`money_${user.id}`, Number(args[0])) // subtract it now
    let bal = await db.fetch(`money_${user.id}`)

    let embed = new Discord.RichEmbed()
    .setAuthor(`Removed Money!`, message.author.displayAvatarURL)
    .addField(`Amount`, `${args[0]}$`)
    .addField(`Balance Updated`, `${bal}$`)
    .setColor("RED") // random = "RANDOM"
    .setTimestamp()
    // you can change it to args[1] if you want to, but then it's not gonna work like I want it to.

    message.channel.send(embed)

}


module.exports.config = {
  name: "remove-money",
  aliases: ["rm", "remy"],
  description: "remove money :(",
  usage: "d>remove-money <amount> <@stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}

