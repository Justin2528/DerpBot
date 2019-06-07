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
         `DerpBot version: v1.1 - DerpBot`
      ]
      setInterval(function() {
      let status = statuses[Math.floor(Math.random() * statuses.length)]
       bot.user.setActivity(status, {type: "WATCHING"});
   



   }, 12000)

      setInterval(function() {
            snekfetch.post(`https://discordbotlist.com/api/bots/547771680798539776/stats`)
        .set('Authorization', '3e2ae91a8942bb8e59cb10f582de4342b13ac937b10b7f01843542fee894a0bcc85c95ef16ce718b3834fdcfb3bc35f5fee4b37e555e5c7d2fb7803608b9dc79')
        .send({
            'guilds': bot.guilds.size,
              'users': bot.users.size,
                'voice_connections': bot.internal.voiceConnections
        })



   }, 100000)

		setInterval(() => {
			dbl.postStats(bot.guilds.size);
		}, 100000)
		
			setInterval(() => {
			      bfd.on("post",(count)=>console.log(`Posted guild count: ${count}`));
		}, 100000)

}	
