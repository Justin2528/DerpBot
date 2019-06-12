const Discord = require("discord.js")
const botconfig = require("../botconfig.json");



module.exports.run = async (bot, message, args) => {
    if(message.channel.type === "dm") return message.channel.send("Nope")
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")

    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command!")|
    message.delete()
    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} has been unbanned from the guild!`)
    } catch(e) {
        message.channel.send(e.message)
    }
bannedMember.send(`You have been unbanned by ${message.author.username} in ${message.guild.name}. reason: ||${reason}||`)

}

module.exports.config = {
    name: "unban",
    description: "Unban a user from the guild!",
    usage: "d>unban <USER ID <--- ID not MENTION> <reason>",
    accessableby: "Administrators",
  aliases: ["ub", "unbanish"]
}
   
