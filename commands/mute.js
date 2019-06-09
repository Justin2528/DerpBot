const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
 if(message.channel.type === "dm") return message.channel.send("Sorry! But this command `mute` don't work in DM!");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#55FFFF",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  message.delete().catch(O_o=>{});


  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");


  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Hi! You've been muted for ${mutetime}. Sorry!`)
  }catch(e){
    message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mute executed by ${message.author}`)
  .setColor("ORANGE")
  .addField("Muted User", tomute)
  .addField("Muted in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Length", mutetime)
  .addField("Reason", reason);

  let derp = message.guild.channels.find(`name`, "derp-logs");
  if(!derp) return message.reply("Please create a incidents channel first!");
  derp.send(muteembed);

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


}



module.exports.config = {
  name: "mute",
  aliases: ["m","nospeak"],
  description: "Mute bad bois :>",
  usage: "d>mute <@user> <time>",
  noalias: "No Aliases",
  accessableby: "Staff"
}
