const { Message } = require("discord.js");

module.exports = {
    name: 'hi',
    aliases: ['hello', 'hey'],
    description: "this is a hello command",
    async execute(Client, message, args, discord) {
        message.channel.send(`no ${message.author} that is a work in progress`);
    }
}