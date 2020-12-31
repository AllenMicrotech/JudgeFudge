const Discord = require('discord.js');
const client = new Discord.Client();

var token = ''; //CLEAR THIS BEFORE SHARING CODE!!

client.on('ready', () => {
    client.user.setActivity("Under Development"); 
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    /*
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
    */

});


client.login(token);
