

const YTDL = require("ytdl-core")
const Discord = require("discord.js");
const DBM = {};
const DiscordJS = DBM.DiscordJS = require('discord.js');
const send = require("quick.hook");

 
    // Send the message to the member. If you want to send it in a public channel, just
    // use any other text channel resolvable by discord.js here.
    

const Enmap = require('enmap');

const db = require("quick.db");

if (process._maxListeners)
    process.setMaxListeners(process._maxListeners + 1);

var servers = {};

//bot.settings = new Enmap({
  //name: "settings",
//  fetchAll: false,
//  autoFetch: true,
  //cloneLevel: 'deep'
//});

const express = require('express');
const keepalive = require('express-glitch-keepalive');

const app = express();

app.use(keepalive);

app.use(express.static('public'));



app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.listen(process.env.PORT, () => console.log(`DerpBot listening on port ${process.env.PORT}!`));


app.use(express.static('public'))
const xp = require("./xp.json")
const bot = new Discord.Client({
disableEveryone: true

});



const fs = require("fs");

function getTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    return hour + ":" + min + ":" + sec;
}
var time = getTime();

function getDateNow() {

    var date = new Date();

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;


    return month + "." + day + "." + year;
}
var date = getDateNow();

bot.on('debug', (debug) => {
    let debugged = debug.replace(process.env.TOKEN, '[Hidden To Prevent Leaking]')
    console.log(`[Time: ${time}]\r\n[Date: ${date}]\r\n${debugged}\r\n`)
    fs.appendFile("./logs/debug.txt", (`[Time: ${time}]\r\n[Date: ${date}]\r\n${debugged}\r\n`), (err) => {

    })
})

bot.settings = new Enmap({
  name: "settings",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});

const dsettings = {
  prefix: "d>" ,
  welcomeChannel: "welcome" ,
  leaveChannel: "goodbye" ,
  welcomeMessage: "Say hello to `{{user}}`, everyone!" ,
  leaveMessage: "Goodbye, `{{user}}`! :(",
    modLogChannel: "derp-log"
 
}
// Just
const ownerID = '386490806716071946'
const active = new Map();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.APITOK, bot);


require("./util/eventHandler")(bot);

     




function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });

}

bot.on('messageDelete', msg => {
  if(msg.author.bot) return;
  let oke = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("Message Deleted")
  .setTimestamp()
   .setDescription("Message: " + msg + " \nMessage Author: " + msg.author.username)
  .setFooter("DerpBot Log", bot.user.displayAvatarURL)
  bot.settings.ensure(msg.guild.id, dsettings);
  let ok = msg.guild.channels.find("name", bot.settings.get(msg.guild.id, "modLogChannel"))
   if(!ok) return;  
  ok.send(oke)
    .catch(console.error);
});
bot.on('channelCreate', channel => {
if(channel.type === "dm") return; 
  let oke = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Channel Created!")
.setTimestamp()
   .setDescription("Channel: " + channel.name)
  .setFooter("DerpBot Log", bot.user.displayAvatarURL)
  bot.settings.ensure(channel.guild.id, dsettings);
  let ok = channel.guild.channels.find("name", bot.settings.get(channel.guild.id, "modLogChannel"))
   if(!ok) return;  
  ok.send(oke)
    .catch(console.error);
});
bot.on('guildBanAdd', (guild, user) => {
 
  let oke = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("BANNED!")
.setTimestamp()
   .setDescription("Banned User: " + user.username)
  .setFooter("DerpBot Log", bot.user.displayAvatarURL)
  bot.settings.ensure(guild.id, dsettings);
  let ok = guild.channels.find("name", bot.settings.get(guild.id, "modLogChannel"))
   if(!ok) return;  
  ok.send(oke)
    .catch(console.error);
});

bot.on('guildBanRemove', (guild, user) => {
 
  let oke = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("UNBANNED!")
.setTimestamp()
   .setDescription("Unbanned User: " + user.username)
  .setFooter("DerpBot Log", bot.user.displayAvatarURL)
  bot.settings.ensure(guild.id, dsettings);
  let ok = guild.channels.find("name", bot.settings.get(guild.id, "modLogChannel"))
   if(!ok) return;  
  ok.send(oke)
    .catch(console.error);
});
bot.on('roleCreate', role => {
 
  let oke = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Role Created!")
.setTimestamp()
   .setDescription("Role: " + role.name + "\n Color: " + role.color)
  .setFooter("DerpBot Log", bot.user.displayAvatarURL)
  bot.settings.ensure(role.guild.id, dsettings);
  let ok = role.guild.channels.find("name", bot.settings.get(role.guild.id, "modLogChannel"))
   if(!ok) return;  
  ok.send(oke)
    .catch(console.error);
});
bot.on('roleDelete', role => {
 
  let oke = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("Role Deleted!")
.setTimestamp()
   .setDescription("Deleted Role Name: " + role.name + "\nDeleted Role Color: " + role.color)
  .setFooter("DerpBot Log", bot.user.displayAvatarURL)
  bot.settings.ensure(role.guild.id, dsettings);
  let ok = role.guild.channels.find("name", bot.settings.get(role.guild.id, "modLogChannel"))
   if(!ok) return;  
  ok.send(oke)
    .catch(console.error);
});
bot.on('channelDelete', channel => {
 
  let oke = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle("Channel Deleted!")
.setTimestamp()
   .setDescription("Channel: " + channel.name)
  .setFooter("DerpBot Log", bot.user.displayAvatarURL)
  bot.settings.ensure(channel.guild.id, dsettings);
  let ok = channel.guild.channels.find("name", bot.settings.get(channel.guild.id, "modLogChannel"))
   if(!ok) return;  
  ok.send(oke)
    .catch(console.error);
});

bot.on('roleUpdate', (orole, nrole) => {
 
  let oke = new Discord.RichEmbed()
  .setColor("BLUE")
  .setTitle("Role Updated!")
.setTimestamp()
   .setDescription("Old Role Name: `" + orole.name + "` Old Role Color: `" + orole.color + "`\nNew Role Name`" + nrole.name + "` New Role Color:" + nrole.color)
  .setFooter("DerpBot Log", bot.user.displayAvatarURL)
  bot.settings.ensure(orole.guild.id, dsettings);
  let ok = orole.guild.channels.find("name", bot.settings.get(orole.guild.id, "modLogChannel"))
   if(!ok) return;  
  ok.send(oke)
    .catch(console.error);
});
bot.on('channelUpdate', (ochannel, nchannel) => {
 
  let oke = new Discord.RichEmbed()
  .setColor("BLUE")
  .setTitle("Channel Updated!")
.setTimestamp()
   .setDescription("Old Channel: " + ochannel.name + " `TOPIC: " + ochannel.topic + "`" + "\nNew Channel: " + nchannel.name + " `TOPIC: " + nchannel.topic + "`")
  .setFooter("DerpBot Log", bot.user.displayAvatarURL)
  bot.settings.ensure(ochannel.guild.id, dsettings);
  let ok = ochannel.guild.channels.find("name", bot.settings.get(ochannel.guild.id, "modLogChannel"))
   if(!ok) return;  
  ok.send(oke)
    .catch(console.error);
});
bot.on('messageUpdate', (omsg, nmsg) => {
    if(omsg.author.bot) return;
      bot.settings.ensure(omsg.guild.id, dsettings);
  let oke = new Discord.RichEmbed()
  .setColor("ORANGE")
  .setTitle("Message Deleted")
.setTimestamp()
   .setDescription("Orignal Message: " + omsg + "\nEdited Message: " + nmsg + " \nMessage Author: " + nmsg.author.username)
  .setFooter("DerpBot Log", bot.user.displayAvatarURL)
  bot.settings.ensure(omsg.guild.id, dsettings);
  let ok = omsg.guild.channels.find("name", bot.settings.get(omsg.guild.id, "modLogChannel"))
   if(!ok) return;  
  ok.send(oke)
    .catch(console.error);
});
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




bot.on("error",async error => {
   let ok = bot.channels.get("587241780655947778");
  ok.send(`error! ${error}`);
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
   bot.settings.delete(guild.id);
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


bot.on("guildMemberAdd", member => {
  // This executes when a member joins, so let's welcome them!
  


  // First, ensure the settings exist
  bot.settings.ensure(member.guild.id, dsettings);
  
  // First, get the welcome message using get: 
  let welcomeMessage = bot.settings.get(member.guild.id, "welcomeMessage");
  
  // Our welcome message has a bit of a placeholder, let's fix that:
  welcomeMessage = welcomeMessage.replace("{{user}}", member.user.tag)
  
  // we'll send to the welcome channel.
  let ok = member.guild.channels.find("name", bot.settings.get(member.guild.id, "welcomeChannel"))
   if(!ok) return;  
  ok.send(welcomeMessage)
    .catch(console.error);
});
bot.on("guildMemberRemove", member => {
  // This executes when a member joins, so let's welcome them!
  


  // First, ensure the settings exist
  bot.settings.ensure(member.guild.id, dsettings);
  
  // First, get the welcome message using get: 
  let leaveMessage = bot.settings.get(member.guild.id, "leaveMessage");
  
  // Our welcome message has a bit of a placeholder, let's fix that:
 leaveMessage = leaveMessage.replace("{{user}}", member.user.tag)
  
  // we'll send to the welcome channel.
  let ok = member.guild.channels.find("name", bot.settings.get(member.guild.id, "leaveChannel"))
   if(!ok) return;  
  ok.send(leaveMessage)
    .catch(console.error);
});

bot.on("message", async message => {
  if(message.author.bot) return;
if (message.channel.type === "dm") return message.channel.send("Sorry to tell you but commands don't work in DM channel!")
    const guildconf = bot.settings.ensure(message.guild.id, dsettings);
  let prefix = guildconf.prefix

  
  let messageArray = message.content.split(" ")
  let cmd  = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);



let xpAdd = Math.floor(Math.random() * 7) + 8;
db.fetch(`level_${message.guild.id}_${message.author.id}`);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 500;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;






  
    let lvlup = new Discord.RichEmbed()
  
 
    
    .setTitle("Level Up!")
    .setColor("PURPLE")
    .addField("New Level", curlvl + 1);

    // message.author.send(lvlup)
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

    let ops = {
      ownerID: ownerID,
      active: active
    }
        



  if(!message.content.startsWith(prefix) || message.content.startsWith("<@547771680798539776>")) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))

    if(commandfile) commandfile.run(bot,message,args,ops,guildconf,dsettings); 
    
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
