const Discord = require("discord.js");
const ascii = require("ascii-art");

module.exports.run = async (bot, message, args) => {
  ascii.font(args.join(' '), "Doom", function(rendered) {
      

    rendered = rendered.trimRight();

  if(rendered.length > 2000) return message.channel.send(`Sorry mate! That message is rlly loooooooooooooong!`);
  

    message.channel.send(rendered, {
      code: "md"
}); 
  });  
}


module.exports.config = {
  name: "ascii",
  aliases: ["ascii-art"],
  description: "Wewewew Ascii",
  usage: "d>ascii <text>",
  noalias: "No Aliases",
  accessableby: "Members"
}
