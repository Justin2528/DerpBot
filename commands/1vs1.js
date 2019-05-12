    
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()



let target = args[0]
if (!target) return message.reply("Please mention a <Can be text> to battle!").then(r => r.delete(10000));

const filter = m => m.author.id === target.id;

let embed = new Discord.RichEmbed()
.setTitle("Battle!")
.setDescription(`${target} vs ${message.author}`)
.setColor("GREEN")

message.channel.send(`${target}  please type    accept | cancel... Will cancel after 20 seconds`).then(r => r.delete(20000))



        let chance = Math.floor(Math.random * 1000) + 1;
        if (chance < 500) {
            
            embed.addField("Winner", message.author);
            embed.addField("Loser", target);
            message.channel.send(embed)

        } else {
    
            embed.addField("Winner", target);
            embed.addField("Loser", message.author);
            message.channel.send(embed)
            
        }

    }



} 


module.exports.config = {
  name: "1vs1",
  aliases: ["Battle"],
  description: "The World Battle",
  usage: "d>1vs1 <@user> <@user>",
  noalias: "No Aliases",
  accessableby: ""
}
