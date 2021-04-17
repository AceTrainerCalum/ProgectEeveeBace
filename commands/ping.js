const { Message } = require("discord.js");

module.exports = {
    name: 'ping',
    aliases: ['ping', 'test'],
    description: "this is a ping command",
    async execute(Client, message, args, discord){
        message.channel.send(` ${message.author} pong! `);
    }
}
 