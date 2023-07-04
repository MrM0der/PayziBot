const { Events } = require('discord.js');
const Guild = require('../database/guild.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction, player, client) {
        if (!interaction.isChatInputCommand()) return;
        // DB
    let guild = await Guild.findOne({ guildID: interaction.guild.id });

    if (!guild) {
		await Guild.create({ guildID: interaction.guild.id });
		client.channels.cache
			.get('1124261194325299271')
			.send(
				`:white_check_mark: | Сервер ${interaction.guild.name}(${
					interaction.guild.id
				}) успешно был добавлен в БД`
			);
	}
    guild = await Guild.findOne({ guildID: interaction.guild.id });

    if (!guild) return interaction.reply("<:no:1107254682100957224> | Напиши команду еще раз!")
    // DB
    if (interaction.channel === null) return interaction.reply("<:no:1107254682100957224> | Я доступен только на серверах!");
    const cmd = interaction.client.commands.get(interaction.commandName);
    try {
        await cmd.execute(interaction, guild, player);
    } catch (error) {
        interaction.reply(`<:no:1107254682100957224> | Произошла ошибка!`);
        console.log(error);
    }
	},
};