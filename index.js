const Discord = require("discord.js");
  const bot = new Discord.Client();
      bot.on('ready', () => {
          console.log('ONLINE!');
		     

// status 
			 let statuses = [
        "AmdFN Cheat Coming Soon!",
        "AmdFN Cheat Coming Soon!",
        "AmdFN Cheat Coming Soon!" //can add another
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            bot.user.setActivity(status, {type:"WATCHING"})
    
        }, 1000) //Seconds

  
        });



//dm bot cmd

   bot.on("message", message => {
       var prefix = "$";
 
             var args = message.content.substring(prefix.length).split(" ");

       bot.on('message', message => {
                                      if (message.content.split(' ')[0] == '/b')
                                                message.guild.members.forEach( member => {
                                        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
                                         member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                        
                                          message.delete();
            
});
            
});



               if (message.content.startsWith(prefix + "go")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
						  
						  
						  let args = message.content.split(" ").slice(1);
                           var argresult = args.join(' '); 
              message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
              m.send(`${argresult}\n ${m}`);
 
})


                          if (!args[1]) {
                            
							
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark:   |   Successfully Sent the Message to all Server Members.")
                                    
                                    .setColor("#00ff33")
                                    .setTitle ('Message Has been Sent.')
									                  .setFooter ("BOT DEVELOPER : Dev | DISCORD.js")
                                    .setImage('http://bit.ly/36Ske5f');
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {
                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | Message has been Successfully Sent to @everyone xD')
                                                                .setColor("#99999")
                                                                .setFooter ("BOT DEVELOPER : Execute#3817 | DISCORD.js")
                                                                .setTitle ('Message Has been Sent.')
                                                                
                               
                                                                message.channel.sendEmbed(embed4);
                                                                message.delete();
                            }
                          }
						
//dmhelp
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "help")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;
						  
						  
						  let args = message.content.split(" ").slice(1);
						                            if (!args[1]) {
                            
							
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription("You must Need ADMINISTRATOR Permisson! Use $go <your message> pattern to send messages. We are Adding More FEATURES! If you want to Support me with the BOT and if you are a Professional  BOT DEVELOPER and want to help adding Features Then please DM @Ryzen#0001")
                                     .setTitle ('HELP TO USE THE BOT')
                                     .setImage ('')
                                       .setColor("#FF00F0")
									                     .setFooter ("BOT DEVELOPER : Execute#3817 | DISCORD.js")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                                                      message.delete();
                            }
                          }



// login token                          
});
bot.login("NzI3NTIyMzk3MDgyNzQ2OTkx.XvtGQQ.C-KGDH5dpOqsfmHuA8RZxGPGdz0");
