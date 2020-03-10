// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);


var dag = 1;
var antal = 15;
client.on('message', msg => {
  if (msg.content === 'Ny dag') {
msg.channel.send('Dag ' + dag + '\n' + antal +'st Crunches')

.then(message => {
    message.react('✅');
    message.react('❌');
});
	antal = antal + 5;
	dag++;
	
     }

});