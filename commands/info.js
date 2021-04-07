module.exports = {
    name: 'info',
    aliases: ['infomation','i'],
    description: "this is a info command",
    async execute(Client, message, args, discord){
        message.channel.send('this is the info page --- more to come --- ');
    }
}