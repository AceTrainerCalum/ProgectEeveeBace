

module.exports = {
    name: 'readyup',
    description: "test -- for sysbot intergration!",
    async execute(Client, message, args, discord) {
        message.channel.send(`${message.author} start up inisiated!`)
        setTimeout(() => { message.channel.send(`sysbot is starting!`) }, 2000);
        setTimeout(() => { message.channel.send(`start up started!`); }, 2650);
        setTimeout(() => { message.channel.send(`start up at (25%) loading ...`); }, 3000);
        setTimeout(() => { message.channel.send(`Loading ...`); }, 3250);
        setTimeout(() => { message.channel.send(`start up at (50%) loading ...`); }, 4100);
        setTimeout(() => { message.channel.send(`Error 404, Error`); }, 4561);
        setTimeout(() => { message.channel.send(`starting recovery mode ...`); }, 4670);
        setTimeout(() => { message.channel.send(`starting basic recovery`); }, 5000);
        setTimeout(() => { message.channel.send(`recovery ... sucsesfull`); }, 10000);
        setTimeout(() => { message.channel.send(`continuing...`); }, 11000);
        setTimeout(() => { message.channel.send(`SySbot is up!`); }, 13500);
        setTimeout(() => { message.channel.send(`<@802154804830928986>`); }, 14002)

        const newEmbed = new discord.MessageEmbed()
            .setColor('#3fffc8')
            .setTitle('SySbot commands')
            .setDescription('these are the all the pokemon')
            .addFields(
                { name: 'trade', valur: 'do !trade with a showdown set or a pk8 code then look at your dms' },
                { name: 'seedcheck', value: 'checks the dens next shiny seed' },
                { name: 'k', value: 'will catch a catch cord pokemon that can then be traded to your game!' },
                { name: 'clone', value: 'will clone the pokemon you put in trade then will send you it so you have more then 1!', }
            )
            .setFooter('that error message was a JOKE!')
            .setAuthor('Ace_trainer_calum')

        const newEmbed2 = new discord.MessageEmbed()
            .setTitle('hey')
            .setColor('#4fffc9')
            .setDescription('this is a test for multiable embeds')
            .setAuthor('ace')
                
        setTimeout(() => { message.channel.send(newEmbed);; }, 14000);
        setTimeout(() =>  { message.channel.send(newEmbed2);; }, 14001);
    }
}