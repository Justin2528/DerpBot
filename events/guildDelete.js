const Discord = require("discord.js");

module.exports = bot => {
    const liveLeave = bot.channels.get("547776018933612566"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS
    let liveLEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setTitle(`Your Bot Has Stopped Serving A Guild`)
    .setDescription(`**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Members Lost**: ${guild.memberCount}`)
    send(liveLeave, liveLEmbed, {
        name: `Bot Life Support`,
        icon: `https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/search-512.png`
    })
}
