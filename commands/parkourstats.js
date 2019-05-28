const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 var IGN = args[0];
 
if(!IGN) return message.channel.send("Ok, what IS THE IGN????")

 var url = "https://api.hypixel.net/player?key=" + process.env.APIKEY + "&name=" + IGN;

console.log(url);



const snekfetch = require("snekfetch");

snekfetch.get(url).then(r => {
let body = r.body
let offon = `${body.player.displayname} is offline!`
let photo = "https://images-ext-1.discordapp.net/external/UdWXoKUsaYCOyvH6nsDk03AdfJVWTK7cyQVvhqpoF3I/https/image.ibb.co/hwheRV/image.png"

if(body.player.lastLogout < body.player.lastLogin){
  offon = `${body.player.displayname} is online!`
  photo = "https://images-ext-1.discordapp.net/external/74xyeTgd4BElwkkoe92yB3zEwD1ln4N1rh2zeKxVwt8/https/image.ibb.co/h9VNfq/image.png"
} 


if(!body.player.parkourCompletions) return message.channel.send(`ERROR 404: Uh, ${IGN}... They uh idk they never parkour? lold (hypixel)`)



let image = "https://visage.surgeplay.com/full/" + body.player.uuid +".png"


console.log(body)

let ok = new Discord.RichEmbed()
.setTitle("Parkour stats (Hypixel)")
.setColor("9b7653")
.setDescription(`${body.player.displayname}'s Parkour stats`)
.setImage(image)
//.addField("", body.player.parkourCompletions.NewMainLobby.timeStart + "\n"+ body  || "Nope", true)
.setThumbnail("https://images-ext-1.discordapp.net/external/KiCZjFl7Ph0aD0Sy3-1EAADDbRLE8k6NayWFH6olu5o/%3Fs%3D200%26v%3D4/https/avatars0.githubusercontent.com/u/3840546")
.setFooter(offon, photo)

//.addField("", body.player.parkourCompletions.|| "Nope", true)

//Ok LOL

message.channel.send(ok)
}) 
}


module.exports.config = {
  name: "parkourstats",
  aliases: ["pks"],
  description: "yay parkour ded (hypixel)",
  usage: "d>parkourstats <IGN>",
  noalias: "No Aliases",
  accessableby: "memberssssss/giraffe/pitboi/Justin2528/duh"
}
