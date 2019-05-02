const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   message.channel.send("Hello there!")
     const filter = m => m.author.id === message.author.id;
    message.reply(" Tell us ur name! Will expire in 10 seconds... ("Or type cancel")").then(r => r.delete(10000));
    message.channel.awaitMessages(filter, {max: 1, time: 10000}).then(collected => {

        if(collected.first().content === cancel){
            return message.reply("Canceled!")
        }

  let username = collected.first().content;

  message.channel.send(`Hello ${username}! (Working...)`)

    }).catch(err => {
        message.reply("Time has expired!").then(r => r.delete(5000));
    })
}


module.exports.config = {
  name: "testt",
  aliases: ["t"],
  description: "I have no idea",
  usage: "d>testt <stuff>",
  noalias: "No Aliases",
  accessableby: "Duh"
}
