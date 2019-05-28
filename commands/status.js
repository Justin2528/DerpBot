const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("Computer Exam :DDDDDDDDDD Ez");

  message.author.send("Also am showing my teacher how to code Javascript cus my teacher don't know how to code Javascript LOL");
}


module.exports.config = {
  name: "status",
  aliases: ["stats", "s"],
  description: "Status for justin",
  usage: "d>status",
  noalias: "No Aliases",
  accessableby: "Members"
}
