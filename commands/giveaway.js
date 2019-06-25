const Discord = require("discord.js");
 const giveaways = require("discord-giveaways");
 const ms = require("ms");

module.exports.run = async (bot, message, args) => {
message.delete()
if (!message.member.roles.some(role => role.name === 'giveaway')) return message.channel.send("Hey! you need the `giveaway` role!")
if(!args[0])return message.reply("Time plz! (example: 1d (1 day)/1 m (1 minute)/ 1 h (1 hour) / 1s (1s))");
  
if(!args[1])return message.channel.send("Wrong! How many winners? d>help giveaway for more")
if(isNaN(args[1]))return message.channel.send("What? Idk, not a number? The winner is not a number")
if(!args[2])return message.channel.send("What's the prize?")

giveaways.start(message.channel, {
    time: ms(args[0]),
    prize: args.slice(2).join(" "),
    winnersCount: parseInt(args[1]),
    messages: {
        giveaway: "\n\n🎉🎉 **GIVEAWAY** 🎉🎉",
        giveawayEnded: "\n\n🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
        timeRemaining: "Time remaining: **{duration}**!",
        inviteToParticipate: "React with 🎉 to participate!",
        winMessage: "Congratulations, {winners}! You won **{prize}**!",
        embedFooter: "DerpBot Giveaways",
        noWinner: "Giveaway cancelled, no valid participations.",
        winners: "winner(s)",
        endedAt: "Ended at",
        units: {
            seconds: "seconds",
            minutes: "minutes",
            hours: "hours",
            days: "days"
        }
    }
}).catch().catch((err) => message.channel.send("Error!\n" + err));
        
 

            
}

module.exports.config = {
  name: "giveaway",
  aliases: ["gift"],
  description: "Giveaway :D",
  usage: "d>giveaway <time> <Winners> <Prize>",
  noalias: "No Aliases",
  accessableby: "Members"
}
