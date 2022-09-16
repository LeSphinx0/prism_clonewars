const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'sondage',
    permissions: ['ADMINISTRATOR'],
    description: 'Poster votre propre sondage.',
    async run (client, message, args) {
        if (!args[0]) return message.reply('Merci de taper la commande correctement : !sondage [votre contenu]');

        const embed = new MessageEmbed()
            .setTitle('📊 Sondage')
            .setThumbnail('https://media.discordapp.net/attachments/670988547578134530/1018490784875561020/unknown.png')
            .setColor('#403f5e')
            .setDescription(args.slice(0).join(' '))
            .setTimestamp()
            .setFooter({ text: `Nouveau sondage généré par ${message.author.tag}` })

        const poll = await message.reply({ embeds: [embed] });
        poll.react('<:emoji_50:789224596749680651>');
        poll.react('<:emoji_51:789224613800181761>');
        poll.react('<:emoji_52:789224627968278549>');
    },
    options: [
        {
            name: 'titre',
            description: 'Taper le titre de votre sondage.',
            type: 'STRING',
            required: true,
        },
        {
            name: 'contenu',
            description: 'Taper le contenu de votre sondage.',
            type: 'STRING',
            required: true,
        }
    ],
    async runSlash (client, interaction) {
        const pollTitle = interaction.options.getString('titre');
        const pollContent = interaction.options.getString('contenu');

        const embed = new MessageEmbed()
            .setTitle(`📊 ${pollTitle}`)
            .setThumbnail('https://media.discordapp.net/attachments/670988547578134530/1018490784875561020/unknown.png')
            .setColor('#403f5e')
            .setDescription(pollContent)
            .setTimestamp()
            .setFooter({ text: `Nouveau sondage généré par ${interaction.user.tag} !` })

        const poll = await interaction.reply({ embeds: [embed], fetchReply: true });
        poll.react('<:emoji_50:789224596749680651>');
        poll.react('<:emoji_51:789224613800181761>');
        poll.react('<:emoji_52:789224627968278549>');


    },
};