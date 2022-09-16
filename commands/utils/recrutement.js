const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'recrutement',
    permissions: ['ADD_REACTIONS'],
    description: 'Comment devenir staff ?',
    run: (client, message, args) => {
        const rec = new MessageEmbed()
            .setTitle('Comment candidater ❓')
            .setThumbnail('https://cdn.iconscout.com/icon/free/png-256/office-staff-9-1184344.png')
            .addFields(
                { name: 'L\'équipe administrative ou animatrice vous intéresse ?', value : 'Pour tenter votre chance, il suffit de suivre ces instructions :\n\n • Vous rendre sur le [forum](https://prism-community.com/forum-35.html).\n• Cliquez sur "Recrutement Staff" dans la catégorie Clone Wars.\n• Suivre les instructions du modèles.\n\nUne fois terminé, attendez une réponse du staff !'}
            )
            .setTimestamp()
            .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL() });

        message.channel.send({ embeds: [rec] });
    },
    runSlash: (client, interaction) => {
        const rec = new MessageEmbed()
            .setTitle('Comment candidater ❓')
            .setThumbnail('https://cdn.iconscout.com/icon/free/png-256/office-staff-9-1184344.png')
            .addFields(
                { name: 'L\'équipe administrative ou animatrice vous intéresse ?', value : 'Pour tenter votre chance, il suffit de suivre ces instructions :\n\n • Vous rendre sur le [forum](https://prism-community.com/forum-35.html).\n• Cliquez sur "Recrutement Staff" dans la catégorie Clone Wars.\n• Suivre les instructions du modèles.\n\nUne fois terminé, attendez une réponse du staff !'}
            )
            .setTimestamp()
            .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

        interaction.reply({ embeds: [rec] });
    }
};