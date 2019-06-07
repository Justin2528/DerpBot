    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 if(message.channel.type === "dm") return message.channel.send("Sorry! But this command `invitelist` don't work in DM!");
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view invites!');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**INVITELEADERBOARD**`)
        .setColor(0xCB5A5E)
        .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp();
    message.channel.send(embed);
}
  



module.exports.config = {
  name: "invitelist",
  aliases: ["il"],
  description: "Invite list... yeah",
  usage: "d>invitelist",
  noalias: "No Aliases",
  accessableby: "Members"
}
