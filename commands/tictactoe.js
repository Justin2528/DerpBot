const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const ttt = require("discord.js-tictactoe")
    const prefix = "d>"
    const embed_color = "#ff00aa"
    const start_cmd = "tictactoe"
    ttt.run(bot, prefix, embed_color, start_cmd)
}


module.exports.config = {
  name: "tictactoe",
  aliases: ["ttt"],
  description: "yay game yay",
  usage: "d>tictactoe",
  noalias: "No Aliases",
  accessableby: "Members"
}
