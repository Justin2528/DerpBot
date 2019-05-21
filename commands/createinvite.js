const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return message.channel.send("Nope");
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setDescription(`**Permanent Invite Link**: ${invite}`);
    message.channel.send(embed);
  });

}


module.exports.config = {
  name: "createinvite",
  aliases: ["cinvite"],
  description: "Create da gud Invite link",
  usage: "d>createinvite",
  noalias: "No Aliases",
  accessableby: "Members"
}
