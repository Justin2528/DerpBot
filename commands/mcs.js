const Discord = require('discord.js');


var request = require('request');
var mcCommand = '/mcs'; // Command for triggering
var mcIP = args[0]; // Your MC server IP
var mcPort = 25565; // Your MC server port (25565 is the default)


module.exports.run = async (bot, message, args) => {
   if (!message.content === mcCommand) return message.channel.send("Not /mcs");
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = '*Minecraft server is currently offline*';
            if(body.online) {
                status = '**Minecraft** server is **online**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** people are playing!';
                } else {
                    status += '*Nobody is playing!*';
                }
            }
            message.reply(status);
        });
    }
}


module.exports.config = {
  name: "mcs",
  aliases: ["minecraft server stats"],
  description: "Check the minecraft server stats!",
  usage: "/mcs <serverIP>",
  noalias: "No Aliases",
  accessableby: ""
}
