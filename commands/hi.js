const { Message } = require("discord.js");

module.exports = {
    name: 'hi',
    aliases: ['hello', 'hey'],
    description: "this is a hello command",
    async execute(Client, message, args, discord) {
        message.channel.send(`hello ${message.author} hope you are having a good day`)
    }
}