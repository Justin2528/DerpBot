const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops) => {
  //code here
  if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have enough permission to use this command.')
    }

    if (!args[1]) return message.reply('Please specify an amount to add.')
    if (isNaN(args[1])) return message.reply('That was not a valid number!')
if(args[2] === "guild"){
  
     let user = message.mentions.users.first() || message.author
    message.channel.send('Successfully added ' + args[1] + ' to ' + user + ' in the guild bank! ')
    db.add(`money_${message.guild.id}_${user.id}`, Number(args[1]))

}
    let user = message.mentions.users.first() || message.author
    message.channel.send('Successfully added ' + args[1] + ' to ' + user)
    db.add(`money_${user.id}`, Number(args[1]))



db.add(`money_${message.guild.id}_${user.id}`, Number(args[1]))
}


module.exports.config = {
  name: "add-money",
  aliases: ["am"],
  description: "add some money to someone's  account",
  usage: "d>add-money <amount> <guy> <(Extra)Guild(For guild)>",
  noalias: "No Aliases",
  accessableby: "Members"
}

