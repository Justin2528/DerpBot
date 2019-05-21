
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     if(!args[0]) return message.reply("Incorrect Usage! d>!kill <folks>")

if(args[0] == "derpbot"){
   return message.channel.send("Am unkillable")
}

    let replies = ["tried to swim in lava.", "was killed by the annoying dog.", "was killed by Justin2528.", "was killed by Shrey87.", "was killed by DerpBot", "has been banned from the server.", "was killed by a Polar Bear.", "committed die.", "got distracted by looking at a dandelion and ran into a pit of lava."];
let result = Math.floor((Math.random() * replies.length));
    message.channel.send(`${args[0]} ${replies[result]}`)
}


module.exports.config = {
  name: "kill",
  aliases: ["murder"],
  description: "You IDIOT, why you killed dat boi.",
  usage: "d>kill <stuff or mention>",
  noalias: "No Aliases",
  accessableby: "Chara"
}
