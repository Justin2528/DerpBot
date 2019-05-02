const botconfig = require("./botconfig.json");
const YTDL = require("ytdl-core")
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
let prefix = botconfig.prefix
require("./util/eventHandler")(bot);


const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)
    
    var servers = {}
    
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



bot.on("message", async message => {
  if(message.author.bot) return;
if (message.channel.type === "dm") return message.channel.send("Sorry to tell you but commands don't work in DM channel!")
  
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ")
  let cmd  = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

        
    
if(!message.content.startsWith(prefix)) return;
  
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args); 
    
  if(cmd ===`${prefix}test`){
    message.channel.send("Omg it work i cri omg ded not big surprise");
  }
  
    if(cmd ===`${prefix}play`) {
    


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
        
        server.queue.push(args[1])

  if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
      play(connection, message);
  });
    }
})


bot.login(process.env.TOKEN)
