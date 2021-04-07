module.exports = {
    name: 'todo',
    description: "this is a todo command",
    async execute(Client, message, args, discord){
        message.channel.send('this is the todo page --- more to come --- ');
    }
}