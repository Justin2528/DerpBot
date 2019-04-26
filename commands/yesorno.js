const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  
      let color = ''
      const { body } = await superagent
    .get('https://yesno.wtf/api/');
    if(body.answer === 'yes') color = '0x01DF01';
    if(body.answer === 'no') color = '0xFF0000';
    const embed = new Discord.RichEmbed()
    .setColor(color)
    .setImage(`${body.image}`)
    message.channel.send(`The magic API says: **${body.answer}**`, {embed});
  
}


module.exports.config = {
  name: "yesorno",
  aliases: ["yes", "no"],
  description: "Da God tell u yes or no",
  usage: "d>yesorno <something>",
  noalias: "No Aliases",
  accessableby: "Members"
}
