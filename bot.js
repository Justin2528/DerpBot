const botconfig = require("./botconfig.json");
const YTDL = require("ytdl-core")
const Discord = require("discord.js");
const send = require("quick.hook");
const bot = new Discord.Client({
disableEveryone: true

});
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.APITOK, bot);

let prefix = botconfig.prefix
require("./util/eventHandler")(bot);

     
var servers = {};



function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });

}


const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)
    


    
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
        console.log("[LOGS] No Javascript Files. Nothing Loaded.")
    }
    
    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        })
    })

});

bot.on("debug", function(info){
    let ok = bot.channels.get("587225097119465472")
    ok.send(`debug -> ${info}`);
});

 bot.on("guildCreate", guild => {
    const liveJoin = bot.channels.get("579190507780177941"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS
    let liveJEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setTitle(`Your Bot Has Started Serving A Guild`)
    .setDescription(`**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Members Gained**: ${guild.memberCount}`)
    send(liveJoin, liveJEmbed, {
        name: `Bot Life Support`,
        icon: `https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/search-512.png`
    })
 });
 bot.on("guildDelete", guild => {
    const liveLeave = bot.channels.get("579190507780177941"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS
    let liveLEmbed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setTitle(`Your Bot Has Stopped Serving A Guild`)
    .setDescription(`**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Members Lost**: ${guild.memberCount}`)
    send(liveLeave, liveLEmbed, {
        name: `Bot Life Support`,
        icon: `https://cdn1.iconfinder.com/data/icons/flat-business-icons/128/search-512.png`
    })
 });



bot.on("message", async message => {
  if(message.author.bot) return;
//if (message.channel.type === "dm") return message.channel.send("Sorry to tell you but commands don't work in DM channel!")
  
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ")
  let cmd  = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);





        
    
if(!message.content.startsWith("d>" || "D>" || "@DerpBot#2567")) return;
  
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args); 
    
  if(cmd ===`${prefix}test`){
    message.channel.send("Omg it work i cri omg ded not big surprise");
  }
  
//     if(cmd ===`${prefix}play`) {
 



//   if(!args[1]) {
//     return message.channel.send("Gimme da music link.");
//   }
//   if(!message.member.voiceChannel) {
//       return message.channel.send("You are not in a voice channel...");
//    }
//   if(!servers[message.guild.id]) servers[message.guild.id] = {
//     queue: []
//    };
//   var server = servers[message.guild.id];
        
//         server.queue.push(args[1])

//   if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
//       play(connection, message);
//   });
//     }
})


bot.login(process.env.TOKEN)
