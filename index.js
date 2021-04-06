const discord = require ('discord.js');
const Client = new discord.Client();

Client.command = new discord.Collection();
Client.event = new discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(Client, discord)
})

Client.login('YOUR_TOKEN');
