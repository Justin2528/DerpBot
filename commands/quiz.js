const Discord = require('discord.js');
const quiz = [
  { q: "What color is the sky?", a: ["no color", "invisible"] },
  { q: "What does mcs stand for?", a: [""] }
//Example: { q: "", a: [""] }
];
const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};

module.exports.run = async (bot, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                                 .setFooter(`Question: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('No one got the answer in time!')
                                 .setFooter(`Question: ${item.q}`)
                                })
  }
}
module.exports.config = {
  name: "quiz",
  aliases: ["q"],
  description: "Ur IQ",
  usage: "d>quiz",
  noalias: "No Aliases",
  accessableby: "Members"
}
