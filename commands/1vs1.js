    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Eval;').setDescription(message.author.username + 'You cannot use this command in a direct message!').setFooter('', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 2) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription(message.author.tag + 'd>1vs1 <boi> <boi>').setFooter('', client.user.avatarURL).setTimestamp());
    var sans = ["10'a","1'e","20'ye","30'a","2 ye"]
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
      message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('The War is Coming').setFooter('The oof battle.', client.user.avatarURL).setTimestamp())
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('The War is Coming').setFooter('You're ded meat boi', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('The War is Coming').setFooter('THonk', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('The War is Coming').setFooter('Senpai hi', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('The War is Coming').setFooter('Duh ', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('War is over!').setFooter('Battle 101', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Da Winner is: **' + user.tag+'**').setImage("https://media.giphy.com/media/3oEhmVCSmpW56nR6rm/giphy.gif").setFooter('1vs1 END.', client.user.avatarURL).setTimestamp()))
      
}


module.exports.config = {
  name: "1vs1",
  aliases: ["Battle"],
  description: "The World Battle",
  usage: "d>1vs1 <@user> <@user>",
  noalias: "No Aliases",
  accessableby: ""
}
