const snekfetch = require('snekfetch');

module.exports.run = (bot, msg, args) => {

    msg.delete()
  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Achievement Get!", title];
  }
  if (!args[0]) return msg.channel.send("Nothing? e!mcachievement (title) | (content)");

  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;
  if(args.join(" ").toLowerCase().includes("diamond")) rnd = 29;

  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>msg.channel.send("", {files:[{attachment: r.body}]}));

}
module.exports.config = {
  name: "mcachievement",
  aliases: ["MC"],
  description: "Minecraft Achievement Generator I guess lol",
  usage: "d>mcachievement <Title> <Text>",
  noalias: "No Aliases",
  accessableby: "Members"
}
