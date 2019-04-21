const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Invalid Permission. (Hello there! you need Manage Roles permission to mute people!)");
  if(!message.guild.me.hasPermissions(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("ERROR: 500 (No perms `MANAGE_ROLES`)");
  let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!mutee) return message.reply("Please supply a bad boi to be muted!");
  
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

mutee.addRole(muterole.id).then(() => {
    message.delete();
    mutee.send(`Hello, you have been muted by ${message.author.username} in ${message.guild.name} for: ${reason}`)
  message.channel.send(`MESSAGE: ${mutee.user.username} ||was successfully muted.|| `)
  
})
  
 message.channel.send("Also no mod logs.")
  
  

  
}



module.exports.config = {
  name: "mute",
  aliases: ["m","nospeak"],
  description: "Mutes some bad boi",
  usage: "d>mute <@user> <reason>",
  noalias: "No Aliases",
  accessableby: "Members"
}
