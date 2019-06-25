const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops) => {
      let author = await db.fetch(`money_${message.author.id}`)
      let item = await db.fetch(`item_${message.author.id}`)
      
    if(args[0] !== "cookie" || !args[0]){
      return message.channel.send("There is only `cookie` on shop...")
    }

      if(args[0] === "cookie"){
        if (author < 5) return message.channel.send('You need atleast `5$` to purchase the `cookie`!');
        
        db.subtract(`money_${message.author.id}`, 5);
        db.push(`item_${message.author.id}`, 'Cookie');
        message.channel.send(message.author.tag + ' You successfully bought `cookie` for `5$`!')
        
      
    }
}


module.exports.config = {
  name: "buy",
  aliases: ["b"],
  description: "buy stuff from shop! d>shop",
  usage: "d>buy <item in shop>",
  noalias: "No Aliases",
  accessableby: "Members"
}

