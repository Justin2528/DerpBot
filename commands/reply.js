const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  //code here


 if (message.author.id !== "386490806716071946") return message.reply('You cannot use that!')
    var Rargs = message.content.split(' ').slice(2).join(' ');
    let userID = args[0];
      if (isNaN(args[0])) return message.reply("This is not an ID!")
   
   
      bot.users.get(userID).send(Rargs + " ||  Sent by " + message.author.username)
}


module.exports.config = {
  name: "reply",
  aliases: ["Secret"],
  description: "You have no idea what is this",
  usage: "Nope",
  noalias: "No Aliases",
  accessableby: "???"
}

