const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'
client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')
});


client.on('message', message => {
if (message.content === "سبام" + "<@" + `${client.user.id}` + ">") {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`سباام يولد يلعن اومم الفله ${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.login(process.env.BOT_TOKEN);
