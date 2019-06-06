const Discord = require("discord.js");
const moment = require('moment');

const cooldown = new Set();
module.exports.run = async (bot, message, args) => {
 message.delete()
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.channel.send('**[COOLDOWN]** Sending tickets has **5 Minutes** Cooldown!');
    }
    if (args.length < 1) {
        return message.channel.send(`You must give me something to report first ${message.author}`);
    }
    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 300000);
    let guild = message.guild;
    const cnl = bot.channels.get('586202199105732631');
    message.channel.send(`Hey, ${message.author}, we got your report! We will reply soon as possible! Here is the full ticket:`);
    const embed2 = new Discord.RichEmbed()
        .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `**Tickets's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full ticket:** ${message.content}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
        .setColor(16711728);
    message.channel.send({ embed: embed2 });
    const embed = new Discord.RichEmbed()
        .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
        .addField('Ticket:', `**Report's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full report:** ${message.content}`)
        .setThumbnail(message.author.displayAvatarURL)
        .setColor("#ffd700")
        .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
    cnl.send({ embed })
        .catch(e => cnl.send(e))

}


module.exports.config = {
  name: "ticket",
  aliases: ["tick"],
  description: "Ticket/Support i guess",
  usage: "d>ticket <stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}
