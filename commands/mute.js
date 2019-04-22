const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES") || !message.guild.owner) return message.channel.send("Invalid Permission. (Hello there! you need Manage Messages permission to mute people!)");
  if(!message.guild.me.hasPermissions(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("ERROR: 500 (No perms `MANAGE_MESSAGES`)");
  let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!mutee) return message.reply("Please supply a bad boi to be muted!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  
  let reason = args.slice(1).join(" ");
  if(!reason) reason = "No reason given..."
  
  let muterole = message.guild.roles.find(r => r.name === "Muted")
  if(!muterole){
  
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#ff0000",
        permissions: []
      })
      
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
           ADD_REACTIONS: false,
           SEND_TTS_MESSAGES: false,
          ATTACH_FILES: false,
          SPEAK: false
        })
      })
    } catch(e) {
  console.log(e.stack);
}
  
  }

 let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");
  
  await(tomute.addRole(mutee.id));
  message.reply(`<@${mutee.id}> has been muted for ${ms(ms(mutetime))}`);
 mutee.send(`Hello, you have been muted by ${message.author.username} in ${message.guild.name} for ${ms(ms(mutetime))}. || R E A S O N: ${reason}`)
  
let ok = new Discord.RichEmbed()
.setColor("GREEN")
.setFooter("Beta version of this bot don't have mod logs... sorry...")
  
message.channel.send(ok);
  


  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${mutee.id}> has been unmuted!`);
  }, ms(mutetime));

  
}



module.exports.config = {
  name: "mute",
  aliases: ["m","nospeak"],
  description: "Mutes some bad boi",
  usage: "d>mute <@user> <reason>",
  noalias: "No Aliases",
  accessableby: "Members"
}
