const { Message } = require("discord.js");

module.exports = {
    name: 'aliases        ',
    aliases: ['a'],
    description: "this is a command",
    async execute(Client, message, args, discord) {
        const newEmbed = new discord.MessageEmbed()
            .setColor('#3fffc8')
            .setTitle('these are other names for the commands!')
            .setDescription('these are all the command names!')
            .addFields(
                { name: 'help', value: 'help, h' },
                { name: 'info', value: 'info, infomation, i' },
                { name: 'todo', value: 'todo' },
                { name: 'hi', value: 'hello, hey, hi' },
                { name: 'ping', value: 'ping, test' },
                { name: 'commands', value: 'command, c' }
            )
            .setFooter('by ace_trainer_calum');

        message.channel.send(newEmbed);
    }

}


