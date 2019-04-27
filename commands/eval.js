const config = require("../botconfig.json");
const util = require("util");
const ownerid = "386490806716071946";

module.exports.run = async (bot, message, args) => {

let args = message.content.split(" ").slice(1);   
let code = args.join(' ');
  if (message.author.id != '') return;
    try {
  let ev = eval(code)
                let str = util.inspect(ev, {
                    depth: 1
                })
                 str = `${str.replace(new RegExp(`${client.token}|${process.env.TOKEN}`, "g"), "nop?")}`;
                if(str.length > 1800) {
                    str = str.substr(0, 1800)
                    str = str + "..."
                }
                message.delete(); 
    message.channel.send("", { embed: { 
      color: 2551400,      
  fields: [{        
    name: '**Input**',     
      value: '\`\`\`' + code + '\`\`\`'         
},{     
      name: '**Output**', 
          value: '\`\`\`' + str + '\`\`\`'  
        }], 
      footer: {     
    text: ``    }     }});} catch (err) {   message.react("❌");
message.channel.send("", { embed: { 
      color: 2551400,      
  fields: [{        
    name: '**Input**',     
      value: '\`\`\`' + code + '\`\`\`'         
},{     
      name: '**Output**', 
          value: '\`\`\`' + err + '\`\`\`'  
        }], 
      footer: {     
    text: ``    }     }});    } 

}


module.exports.config = {
  name: "eval",
  aliases: ["e", "run"],
  description: "Eval Javascript",
  usage: "d>eval <js>",
  noalias: "No Aliases",
  accessableby: "Bot Owner (JuStIn2528#9111)"
}
