const Discord = require("discord.js");

module.exports = bot => {
//    bot.user.setActivity("derp>help - DerpBot");
   
   
      let statuses = [
         `derp>help - DerpBot`,
         `Partner of EDGE! - DerpBot`,
         `DerpBot version: v0.3.9 - DerpBot`
      ]
      setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)]
       bot.user.setActivity(status, {type: "WATCHING"});
   
   }, 3500)
}
