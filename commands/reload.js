const Discord = require("discord.js")
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {

    if(message.author.id != "386490806716071946") return message.channel.send("You're not the bot the owner!")

    if(!args[0]) return message.channel.send("ERROR: can't reload error")

    let commandName = args[0].toLowerCase()

    try {
        delete require.cache[require.resolve(`./${commandName}.js`)] // usage !reload <name>
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
        return message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`The command \`${args[0].toUpperCase()}\` has been reloaded!`)

}


module.exports.config = {
    name: "reload",
    description: "Fix da bot command?",
    usage: "d>reload",
    accessableby: "Bot Owner",
    aliases: ["creload", "r"]
}
