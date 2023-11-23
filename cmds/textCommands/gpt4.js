const RsnChat = require('rsnchat');
const rsnchat = new RsnChat('CHATGPT_gBYbmLjx3O');

exports.run = async (client, message, args) => {
	rsnchat.gpt(args.join(' '))
		.then(response => {
			if (!response.message) return message.reply('<:no:1107254682100957224> | Ответ не был получен!');
			if (response.message.length > 2000) {
				let mess = response.message;
				mess = mess.substring(0, 1997);
				mess = mess + '...';
				return message.reply(mess);
			}
			message.reply(response.message);
		}).catch(() => {
			message.reply('<:no:1107254682100957224> | Слишком много запросов, либо сервера перегружены. Повторите попытку позже!');
		});
};
exports.help = {
	name: ',gpt4',
	aliases: [',chatgpt4', 'gpt4', 'гпт4', ',гпт4'],
	info: 'owner',
	usage: '[Команда]',
	perm: 'Developer',
	description: 'Выполнить код',
};