const Discord = require("discord.js");
const Minesweeper = require('discord.js-minesweeper');

module.exports.run = async (bot, message, args) => {
  const minesweeper = new Minesweeper();
minesweeper.start();
// Returns a Discord-interpretable string with a 9x9 matrix of spoilers and emojis, 10 of which are mines.
 
const minesweeper = new Minesweeper({
  rows: 12,
  columns: 16,
  mines: 20,
  emote: 'boom',
  returnType: 'code',
});
minesweeper.start();
}


module.exports.config = {
  name: "minesweeper",
  aliases: ["boom"],
  description: "Play Minesweeper!",
  usage: "d>minesweeper",
  noalias: "No Aliases",
  accessableby: "Members"
}
