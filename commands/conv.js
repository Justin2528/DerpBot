const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //code here
let ok = message.author.username
    const filter = m => m.author.id === message.author.id;
  message.channel.send("[???] Hello!").then( async msg => {
    setTimeout(() => {
        msg.edit(`[${ok}] Hello! Who are you?`);
    }, 5000);
    setTimeout(() => {
        msg.edit(`[Justin2528] Oh! Don't worry! I'm Justin2528! the bot creator!`);
    }, 9000);
    setTimeout(() => {
        msg.edit(`[${ok}] Hmm......`);
    }, 10000);
    setTimeout(() => {
        msg.edit('[Justin2528] Wot?');
    }, 15000);
    setTimeout(() => {
        msg.edit(`[${ok}] Am feeling something weird...`)
    setTimeout(() => {
        msg.edit('[Justin2528] Weird...');
    }, 19000);
         setTimeout(() => {
        msg.edit(`[${ok}] Eh, patreon? Cool! I'll be your patron`);
    }, 23000);
         setTimeout(() => {
        msg.edit(`T H E  E N D [?]`);
    }, 26600);
                setTimeout(() => {
        msg.delete(`T H E  E N D [?]`);
    }, 31000);
   });
});
}


module.exports.config = {
  name: "conv",
  aliases: ["???"],
  description: "???",
  usage: "d>conv",
  noalias: "No Aliases",
  accessableby: "Members"
}
