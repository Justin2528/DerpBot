const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, ops) => {
  //code here
//   let item = await db.fetch(`item_${message.author.id}`);
  
//   if(!args[0]){
//     return message.channel.send("You used air. You smelled something smelly. You don't want to go to smell it again.")
    
//   }
  
//   if(item !== null){
//     return message.channel.send("You have no item.")
//   }

//  if(args[0] !== "cookie"){
//    return message.channel.send("H")
//  } 

}


module.exports.config = {
  name: "use",
  aliases: ["u"],
  description: "use items!",
  usage: "d>use <stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}

