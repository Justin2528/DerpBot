const Discord = require("discord.js")



module.exports.run = async (bot, message, args) => {
    let uEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Username:**", `${message.author.username}`, true)
    .addField("**Discriminator:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Created At:**", `${message.author.createdAt}`, true)
    .setFooter(`DerpBot | Footer`, bot.user.displayAvatarURL);

    message.channel.send({embed: uEmbed});
}


module.exports.config = {
    name: "userinfo",
    description: "Pulls the userinfo of yourself!",
    usage: "d>userinfo",
    accessableby: "Members",
    aliases: ["ui", "info"]
}
