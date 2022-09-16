module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('En ligne !');

       // const devGuild = await client.guilds.cache.get('542972237079379985');
       // devGuild.commands.set(client.commands.map(cmd => cmd));
        client.application.commands.set(client.commands.map(cmd =>cmd));
    },
};

