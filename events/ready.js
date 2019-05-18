const Discord = require("discord.js");
const DBL = require("dblapi.js");
const bot = new Discord.Client();
const dbl = new DBL(process.env.APITOK, bot);
const snekfetch = require("snekfetch")

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

		setInterval(() => {
			dbl.postStats(bot.guilds.size);
		}, 100000)

	setInterval(() => {
         snekfetch.post(`https://botsfordiscord.com/api/bot/547771680798539776`)
        .set('Authorization', '3e2ae91a8942bb8e59cb10f582de4342b13ac937b10b7f01843542fee894a0bcc85c95ef16ce718b3834fdcfb3bc35f5fee4b37e555e5c7d2fb7803608b9dc79')
        .send({
            'count': bot.guilds.size,
        })
	}, 100000)
}
