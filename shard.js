


const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./bot.js', {
  token: process.env.TOKEN,
  autoSpawn: true
});

shard.spawn(2);

let ok = bot.channels.find("586517197044580352");


shard.on('launch', shard => ok.send(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));
