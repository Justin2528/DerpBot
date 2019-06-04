const Discord = require("discord.js"),
   math = require('math-expression-evaluator');
module.exports.run = async (bot, message, args) => {
      const embed = new Discord.RichEmbed()
        .setColor(0xffffff);
    
    // Verify Input
    if (!args[0]) {
        
        // Configure Embed
        embed.setFooter('Please input an expression.');
        
        // Return & Send Embed
        return message.channel.send(embed);
        
    }
    
    // Evaluate Expression
    let result;
    try {
        
        result = math.eval(args.join(' '));
        
    } catch (e) { // This will catch any errors in the expression
        
        result = 'Error: "Invalid Input"';
        
    }
        
    
    // Configure Embed
    embed.addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
         .addField('Output', `\`\`\`js\n${result}\`\`\``);
         
    // Send Embed
    message.channel.send(embed);
    
}


module.exports.config = {
  name: "math",
  aliases: ["1+2=3"],
  description: "2+2 is 4 - 1 that's 3 quick maths",
  usage: "d>math (Math stuff)",
  noalias: "No Aliases",
  accessableby: "Members"
}
