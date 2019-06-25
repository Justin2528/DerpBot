    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if (!message.guild.member(bot.user).hasPermission("SEND_MESSAGES")) return message.author.send('I don\'t have permission to Send Messages. Please enable send messages for my role!');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈", ":seven:", "🍰"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] === slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("You Won!🎉", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('You Lost!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(embed);
    }

}


module.exports.config = {
  name: "slot",
  aliases: ["gamble"],
  description: "Fun i guess",
  usage: "d>slot",
  noalias: "No Aliases",
  accessableby: "Members"
}
