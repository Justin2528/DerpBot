const Discord = require("discord.js");
const Minesweeper = require('discord.js-minesweeper');

module.exports.run = async (bot, message, args) => {

// Returns a Discord-interpretable string with a 9x9 matrix of spoilers and emojis, 10 of which are mines.
 
 const rows = parseInt(args[0]);
    const columns = parseInt(args[1]);
    const mines = parseInt(args[2]);
 
    if (!rows) {
      return message.channel.send(':warning: Please provide the number of rows.');
    }
 
    if (!columns) {
      return message.channel.send(':warning: Please provide the number of columns.');
    }
 
    if (!mines) {
      return message.channel.send(':warning: Please provide the number of mines.');
    }
 
    const minesweeper = new Minesweeper({ rows, columns, mines });
    const matrix = minesweeper.start();
 
    return matrix
      ? message.channel.send(matrix)
      : message.channel.send(':warning: You have provided invalid data.');
  }

module.exports.config = {
  name: "minesweeper",
  aliases: ["boom"],
  description: "Play Minesweeper!",
  usage: "d>minesweeper <rows> <columns> <mines>",
  noalias: "No Aliases",
  accessableby: "Members"
}
