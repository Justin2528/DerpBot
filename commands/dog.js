const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")
    let meows = ["woof", "Woof?", "Boof", "oof", "Roses are red, violets are blue, woofs are bad."];
    let meow = meows[Math.floor(Math.random() * meows.length)]

        let cEmbed = new Discord.RichEmbed()
        .setColor("CYAN")
        .setAuthor(meow, message.guild.iconURL)
        .setImage(body.message)
        .setTimestamp()
        .setFooter(`OOf`, bot.user.displayAvatarURL)

        message.channel.send({embed: cEmbed})
        
        message.channel.send(body.status)

        msg.delete();
}


module.exports.config = {
    name: "dog",
    description: "Oof",
    usage: "d>dog",
    accessableby: "Doger",
    aliases: ["moof", "boof"]
}

