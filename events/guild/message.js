const { Client } = require("discord.js");

module.exports = (Discord, Client, message) => {
    const prefix = '!';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    const command = Client.command.get (cmd) || Client.command.find(a => a.aliases && a.aliases.includes(cmd));
    
    if(command) command.execute(Client, message, args, Discord);
}