const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **I think ${message.author.username} is ${gay}% gay!** :gay_pride_flag:`);
        .setFooter("Event Command")
    message.delete(10);
    return message.channel.send(gayembed);

}


module.exports.config = {
  name: "",
  aliases: [""],
  description: "",
  usage: "",
  noalias: "No Aliases",
  accessableby: ""
}

}


module.exports.config = {
  name: "",
  aliases: [""],
  description: "",
  usage: "",
  noalias: "No Aliases",
  accessableby: ""
}
