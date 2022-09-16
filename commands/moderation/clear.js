module.exports = {
    name: 'clear',
    permissions: ['ADMINISTRATOR'],
    description: 'Supprimer un nombre de message spécifié.',
    async run (client, message, args) {
        const amountToDelete = args[0];
        if (!args[0] || amountToDelete > 100 || amountToDelete < 0 ) return message.reply('Le nombre doit être inférieur à 100 et supérieur à 0');
        const target = message.mentions.users.find(u => u.id);
        await message.delete();

        const messagesToDelete = await message.channel.messages.fetch();

        if (target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messagesToDelete).filter(msg => {
                if (msg.author.id = target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });

            await message.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
                message.channel.send(`Suppression de ${messages.size} messages.`);
            });
        } else {
            await message.channel.bulkDelete(amountToDelete, true).then(messages => {
                message.channel.send(`Suppression de ${messages.size} messages sur ce salon.`);
            });
        }
    },
    options: [
        {
            name: 'nombre',
            description: 'Nombre de message à supprimer',
            type: 'NUMBER',
            required: true,
        },
        {
            name: 'utilisateur',
            description: 'Sélectionner l\'utilisateur pour la suppression de message',
            type: 'USER',
            required: false,
        }
    ],
    async runSlash(client, interaction) {
        const amountToDelete = interaction.options.getNumber('nombre');
        if (amountToDelete > 100 || amountToDelete < 0 ) return interaction.reply('Le nombre doit être inférieur à 100 et supérieur à 0');
        const target = interaction.options.getMember('utilisateur');

        const messagesToDelete = await interaction.channel.messages.fetch();

        if (target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messagesToDelete).filter(msg => {
                if (msg.author.id = target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });

            await interaction.channel.bulkDelete(filteredTargetMessages, true).then(messages => {
                interaction.reply(`Suppression de ${messages.size} messages.`);
            });
        } else {
            await interaction.channel.bulkDelete(amountToDelete, true).then(messages => {
                interaction.reply(`Suppression de ${messages.size} messages sur ce salon.`);
            });
        }
    },
};