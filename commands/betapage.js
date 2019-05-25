    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //code here

let pages = ['1', '2']
let page = 1; 
 
  let embed = new Discord.RichEmbed() 
    .setColor(0xffffff)
    .setaddField(`Pitstats here`, "Weeb") 
    .setDescription("Stuff's stats here")
    .setFooter("Online stuff")
 
  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
       embed.addField("Pitstats", "here")
        embed.setDescription("Pitstats here"); 
        embed.setFooter(`Online stuff`); 
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 

        page++; 
       embed.addField("Memems stats", "here")
        embed.setDescription("Bam's stuff"); 
        embed.setFooter(`Offline sutff here`); 
        msg.edit(embed) 
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
