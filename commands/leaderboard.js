const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops) => {
  //code here
    let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'}).then(resp => {
      
      resp.length = 15;
      let finalOutput = `**Leaderboard**\n\n`;
      
      for (var i in resp) {
        finalOutput += `${bot.users.get(resp[i].ID.split('_')[2]).username} -- ${resp[i].data}$\n`;
      }

   message.channel.send(finalOutput)
    });


//     let content = "";

//     for (let i = 0; i < money.length; i++) {
//         let user = bot.users.get(money[i].ID.split('_')[2]).username

//         content += `${i+1}. ${user} ~ ${money[i].data}$\n`
//     }

//     const embed = new Discord.RichEmbed()
//     .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
//     .setDescription(content)
//     .setColor(0x51267)
//     .setFooter("DerpBot Leaderboard")

//     message.channel.send(embed)
}


module.exports.config = {
  name: "lb" || "leaderboard",
  aliases: ["lb", "yeah"],
  description: "Leaderboard (Global)",
  usage: "d>lb / d>leaderboard",
  noalias: "No Aliases",
  accessableby: "Members"
}

