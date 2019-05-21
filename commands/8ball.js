
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if(!args[0]) return message.reply("Incorrect Usage! d>8ball <question>")
    let replies = ["Yes.", "No", "I don't know", "Ask again later", "I have no idea"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice().join(" ");

    let L = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("RANDOM")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(L)
}


module.exports.config = {
  name: "8ball",
  aliases: ["Dragon Ball"],
  description: "Uh tell u da future? idk lol",
  usage: "d>8ball <stuff>",
  noalias: "No Aliases",
  accessableby: "GOD"
}
