const Discord = require('discord.js');


var request = require('request');
 // Your MC server port (25565 is the default)


module.exports.run = async (bot, message, args) => {

var mcIP = args[0]; // Your MC server IP
var mcPort = 25565;



        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = '*Minecraft server is currently offline*';
            if(body.online) {
                status = '**Minecraft** server is **online**';
                if(body.players.now) {
                    status += '\n**' + body.players.now + '** people are playing now!';
                } else {
                    status += '\n*Nobody is playing!*';
                }
                 if(body.motd) {
                   status += '\n**motd:' + body.motd + '**'; 
                 }
                 if(body.server.name) {
                   status += '\n**name:' + body.server.name + '**'
                 }
            }
            message.reply(status);
        });
    
}


module.exports.config = {
  name: "mcs",
  aliases: ["minecraft server stats"],
  description: "Check the minecraft server stats!",
  usage: "d>mcs <serverIP>",
  noalias: "No Aliases",
  accessableby: "Members"
}
