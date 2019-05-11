const Discord = require("discord.js");

module.exports = bot => {
//    bot.user.setActivity("derp>help - DerpBot");
   
   
      let statuses = [
         `d>help - DerpBot`,
         `Partner of EDGE! - DerpBot`,
         `DerpBot version: v1.1 - DerpBot`
      ]
      setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)]
       bot.user.setActivity(status, {type: "WATCHING"});
   
   }, 12000)
}
