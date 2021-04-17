module.exports = {
    name: 'help',
    aliases: ['h'],
    description: "this is the help section",
    async execute(Client, message, args, discord){
        const newEmbed = new discord.MessageEmbed()
        .setColor('#3fffc8')
        .setTitle('Help!')
        .setDescription('hello!, this is eevee bot a progect made by ace_trainer_calum.If you wish to see all the commands then do !commands, ping and hi bough show if the bot is up with a simple message !info and !todo will show you the infomation about the bot and what i am workig on in the future, hope this helps :)')
    
        message.channel.send(newEmbed);
    }

}