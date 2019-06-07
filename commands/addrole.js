    
const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
if(message.channel.type === "dm") return message.channel.send("Sorry! But this command `addrole` don't work in DM!");
    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("Please provide a user to add a role too.")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("Please provide a role to add to said user.") 
    let reason = args.slice(2).join(" ")
    if(!reason) return message.channel.send("Please provide a reason")

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to perform this command.")

    if(rMember.roles.has(role.id)) {
        return message.channel.send(`${rMember.displayName}, already has the role!`)
    } else {
        await rMember.addRole(role.id).catch(e => message.channel.send(e))
        message.channel.send(`The role, ${role.name}, has been added to ${rMember.displayName}.`)
    }
    
 

}

module.exports.config = {
    name: "addrole",
    description: "Adds a role to a member of the guild!",
    usage: "d>addrole",
    accessableby: "Moderators",
    aliases: ["ar", "roleadd"]
}
