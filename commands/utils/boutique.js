const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'boutique',
    permissions: ['ADD_REACTIONS'],
    description: 'Ouvrir la boutique',
    run: (client, message, args) => {
        const rec = new MessageEmbed()
            .setTitle('💵 Boutique')
            .setThumbnail('https://cdn3.iconfinder.com/data/icons/crowdfunding-4/64/x-20-512.png')
            .addFields(
                { name: 'Vous avez demandé la boutique ?', value : 'Il vous suffit simplement de cliquer sur ce lien :\n\n🔗 https://shop.prism-community.com/\n\nPuis vous pourrez faire votre choix :ringed_planet:'}
            )
            .setTimestamp()
            .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });

        message.channel.send({ embeds: [rec] });
    },
    runSlash: (client, interaction) => {
        const rec = new MessageEmbed()
            .setTitle('💵 Boutique')
            .setThumbnail('https://cdn3.iconfinder.com/data/icons/crowdfunding-4/64/x-20-512.png')
            .addFields(
                { name: 'Vous avez demandé la boutique ?', value : 'Il vous suffit simplement de cliquer sur ce lien :\n\n🔗 https://shop.prism-community.com/\n\nPuis vous pourrez faire votre choix :ringed_planet:'}
            )
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

        interaction.reply({ embeds: [rec] });
    }
};