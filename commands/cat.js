const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating Cat on Marsmi...")

    let {body} = await superagent
    .get(`http://aws.random.cat/meow`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")
    let meows = ["Cats live on mars 100%", "Marsmiew?", "BEow", "Roses are red, violets are blue, Marsmi is god."];
    let meow = meows[Math.floor(Math.random() * meows.length)]

        let cEmbed = new Discord.RichEmbed()
        .setColor("CYAN")
        .setAuthor(meow, message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter(`Meow`, bot.user.displayAvatarURL)

        message.channel.send({embed: cEmbed})

        msg.delete();
}


module.exports.config = {
    name: "cat",
    description: "Meow",
    usage: "d>cat",
    accessableby: "Cat",
    aliases: ["Thanos Vs Marsmi! Who win? Always Marsmi you idiot.", "Mars"]
}
