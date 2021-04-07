module.exports = {
    name: 'commands',
    aliases: ['command','c'],
    description: "this is a command",
    async execute(Client, message, args, discord){
        const newEmbed = new discord.MessageEmbed()
        .setColor('#3fffc8')
        .setTitle('useable commands!')
        .setDescription('these are the all the commands!')
        .addFields(
            {name: 'help', value: 'this is the general help command'},
            {name: 'info', value: 'shows bot infomation'},
            {name: 'todo', value: 'shows you what i am planning to add to my bot'},
            {name: 'hi', value: 'a simple hello bot to make sure it is up'},
            {name: 'ping', value: 'pong!'},
            {name: 'commands', value: 'where you are now!'}
        )
        .setFooter('this is a footer!');

     message.channel.send(newEmbed);
    }

}
