const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    bot.user.setActivity("derp>help - DerpBot");
})

bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;
  
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ")
  let cmd  = messageArray[0];
  let args = messageArray.slice(1);
  
  if(cmd ===`${prefix}test`){
    message.channel.send("Omg it work i cri omg ded not big surprise");
  }
  
})


bot.login(process.env.TOKEN)
