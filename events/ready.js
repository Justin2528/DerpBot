const Discord = require("discord.js");
const DBL = require("dblapi.js");
const bot = new Discord.Client();
 const BFDAPI = require("bfdapi.js");
  const bfd = new BFDAPI(bot,process.env.BFD);

const snekfetch = require("snekfetch");


module.exports = bot => {
//    bot.user.setActivity("derp>help - DerpBot");
const dbl = new DBL(process.env.APITOK, bot);
 const bfd = new BFDAPI(bot,process.env.BFD);

        


      let statuses = [
         `d>help - DerpBot`,
         `New Hypixel Commands! - DerpBot`,
         `DerpBot version: v1.2 - DerpBot`
      ]
      setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)]
       bot.user.setActivity(status, {type: "WATCHING"});
   



   }, 12000)

      setInterval(function() {
            snekfetch.post(`https://discordbotlist.com/api/bots/547771680798539776/stats`)
        .set('Authorization', process.env.DBLTOK)
        .send({
            'guilds': bot.guilds.size,
              'users': bot.users.size,
                'voice_connections': bot.voiceConnections
        })



   }, 100000)
      setInterval(function() {
            snekfetch.post(`https://discord.boats/api/v2/bot/547771680798539776`)
        .send({
            'server_count': bot.guilds.size

        })



   }, 100000)

      setInterval(function() {
            snekfetch.post(`https://discord.bots.gg/api/v1/bots/547771680798539776/stats`)
        .set('Authorization', process.env.DBGGTOK)
        .send({
            'guildCount': bot.guilds.size

        })



   }, 100000)
		setInterval(() => {
			dbl.postStats(bot.guilds.size);
		}, 100000)
		
			setInterval(() => {
			      bfd.on("post",(count)=>console.log(`Posted guild count: ${count}`));
		}, 100000)

}	
