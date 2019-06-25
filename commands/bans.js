const Discord = require("discord.js");
const db = require("quick.db");
const arraySort = require('array-sort');
const table = require('table');
const send = require("quick.hook");

module.exports.run = async (bot, message, args, ops, guildconf) => {
  //code here
  if(!message.member.hasPermission(0x00002000))return message.channel.send("You need the Manage Messages Perms!")

   let ban = await message.guild.fetchBans().catch(error => {
        return message.channel.send('Sorry, I don\'t have the proper permissions to view bans!');
    });

    ban = ban.array();
  
   if(ban === null){
     return message.channel.send("No ban")
   }
    let users = message.guild.fetchBans().id;

    arraySort(ban, 'size', {
        reverse: true
    });

    let possiblebans = [
        ['Users', 'ID']
    ];
    ban.forEach(function(ban) {
        possiblebans.push([ban.username, ban.id]);
    })

    const embed = new Discord.RichEmbed()
        .setColor(0xCB5A5E)
        .addField('Bans', `\`\`\`${table.table(possiblebans)}\`\`\``);
    send(message.channel, embed, {
        name: 'bans'

    });

  
}


module.exports.config = {
  name: "bans",
  aliases: ["blist"],
  description: "Ban list with usernames and IDs",
  usage: "d>bans",
  noalias: "No Aliases",
  accessableby: "Staff"
}

