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
			dbl.postStats(bot.guilds.size,bot.shard.id,bot.shard.count);
		}, 100000)

	setInterval(() => {
         snekfetch.post(`https://botsfordiscord.com/api/bot/547771680798539776`)
        .set('Authorization', 'e088d9a4cbabd87c5baad6ef8a4d7208b100a8ebc38111ac2c6e34df1324e0b900d2f09c6a04b4025937d970f070bf78f688e29efbb320eff054fe333b9d0ba8')
        .send({
            'count': bot.guilds.size,
        })
	}, 100000)
}
