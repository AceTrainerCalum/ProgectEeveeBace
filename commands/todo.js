

module.exports = {
    name: 'todo',
    description: "this is a todo command",
    async execute(Client, message, args, discord) {
    

        let role = message.guild.roles.cache.find(r => r.name === 'not a bot'); 
    }}
