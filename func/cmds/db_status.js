function switchTo(val) {
	let status = ' ';
	switch (val) {
	case 0: status = '🔴 Отключено';
		break;
	case 1: status = '🟢 Подключено';
		break;
	case 2: status = '🟠 Подключение...';
		break;
	case 3: status = '🟣 Неизвестно?';
		break;
	}
	return status;
}

module.exports = {
	switchTo,
};