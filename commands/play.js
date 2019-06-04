const Discord = require("discord.js");
const YTDL = require("ytdl-core");


module.exports.run = async (bot, message, args) => {



let servers = {};

function play(connection, message) {
  var server = servers[message.guild.id];

  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
  server.queue.shift();

  server.dispatcher.on("end", function () {
   if (server.queue[0]) play(connection, message);
   else connection.disconnect();
});

}
  if(!args[1]) {
    message.channel.send("Gimme da music link.");
  }
  if(!message.member.voiceChannel) {
      message.channel.send("You are not in a voice channel...");
   }
  if(!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
   };
  var server = servers[message.guild.id];

  if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
      play(connection, message);
  });
}


module.exports.config = {
  name: "play",
  aliases: ["p"],
  description: "Play Music!",
  usage: "d>play <link>",
  noalias: "No Aliases",
  accessableby: "Members"
