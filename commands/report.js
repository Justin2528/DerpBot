const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  //code here
     let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason || "No reason");

    let reportschannel = message.guild.channels.find(`name`, "derp-reports");
    if(!reportschannel) return message.channel.send("Plz create a channel call `derp-reports`");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}


module.exports.config = {
  name: "report",
  aliases: ["re"],
  description: "report some bad boys",
  usage: "d>report <guy> <reason>",
  noalias: "No Aliases",
  accessableby: "Members"
}

