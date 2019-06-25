const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  //code here
      let embed = new Discord.RichEmbed()
    .setTitle(`${bot.user.tag} Store!`, bot.user.displayAvatarURL)
    .setDescription('**Use d>buy <item> to buy!**')
    .addField(`cookie`, '`5$`\nEat em!')
    .addField(`more coming soon...`, '`???`\n Stay tuned! `Tips: if you use d>buy, lower case plz! Example: d>buy cookie`') // can add up to 25(I believe)
    .setColor("RANDOM") 
      .setFooter("DerpBot Shop")

    message.channel.send(embed)
}


module.exports.config = {
  name: "shop",
  aliases: ["s"],
  description: "Check out da items!",
  usage: "d>shop",
  noalias: "No Aliases",
  accessableby: "Members"
}

