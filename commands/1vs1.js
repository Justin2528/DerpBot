    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   if(message.channel.type === "dm") return message.channel.send("Sorry! But this command `1vs1` don't work in DM!");
    message.delete()




let target = args[0]
if (!target) return message.reply("Please mention a <Can be text> to battle!").then(r => r.delete(10000));

let target2 = args[1]
if(!target2) return message.reply("d>1vs1 <stuff> <stuff>")



let embed = new Discord.RichEmbed()
.setTitle("Battle!")
.setDescription(`${target} vs ${target2}`)
.setColor("GREEN")

message.channel.send(`Pow!`).then(r => r.delete(20000))



        let chance = Math.floor(Math.random * 10) + 1;
        if (chance < 5) {
            
            embed.addField("Winner", target2);
            embed.addField("Loser", target);
            message.channel.send(embed)

        } else {
    
            embed.addField("Winner", target);
            embed.addField("Loser", target2);
            message.channel.send(embed)
            
        }

    }






module.exports.config = {
  name: "1vs1",
  aliases: ["Battle"],
  description: "The World Battle",
  usage: "d>1vs1 <user/stuff> <user/stuff>",
  noalias: "No Aliases",
  accessableby: "Members"
}
