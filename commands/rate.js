const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.reply("Can't rate air...")
      let result = Math.floor(Math.random() * 100);


  let rateboi = args.slice().join(" ");

   if(result == 21){
  return message.channel.send(`Rating: ${rateboi} is ∞/∞ 🌟}`)
} else {
    return message.channel.send(`Rating: ${rateboi} is ${result}/100`)
}

}


module.exports.config = {
  name: "rate",
  aliases: ["r"],
  description: "rate ur stuff like pizza",
  usage: "d>rate <stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}
