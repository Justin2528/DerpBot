    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //code here



  let embed = new Discord.RichEmbed() 
    .setColor(0xffffff)

 
  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 

       embed.addField("Pitstats", "here")
        embed.setDescription("Pitstats here"); 
        embed.setFooter(`Online stuff`); 
        return msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 

       embed.addField("Memems stats", "here")
        embed.setDescription("Bam's stuff"); 
        embed.setFooter(`Offline sutff here`); 
        return msg.edit(embed) 
      })
   
    })
 
  })
}


module.exports.config = {
  name: "betapage",
  aliases: ["bp"],
  description: "This is for the pitstats",
  usage: "d>betapage",
  noalias: "No Aliases",
  accessableby: "Members"
}
