module.exports = {
    name: 'pokemon',
    description: "this is a pokemon command",
    async execute(Client, message, args, discord) {
        const newEmbed = new discord.MessageEmbed()
            .setColor('#3fffc8')
            .setTitle('pokemon')
            .setDescription('these are the all the pokemon')
            .addFields(
                {name: 'Bulbasaur'},
            )
            .setFooter('Sprights from bulbipedia!')
            .setAuthor('Ace_trainer_calum')
            .setImage("https://img.pokemondb.net/sprites/home/normal/bulbasaur.png");

        message.channel.send(newEmbed);

    }

}
