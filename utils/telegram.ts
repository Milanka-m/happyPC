const sendTelegramm = async (text: string): Promise<void> => {
	const chat_id: number = -11111111111
	try {
		await fetch(
			`https://api.telegram.org/bot1111111111:AAFzkxg2-Vx0rJE6kg_yIjnPDVJahZ4kJbQ/sendMessage?chat_id=${chat_id}&text=${text}`,
		)
	} catch (error) {
		throw new Error(`Ошибка в отправке сообщения`)
	}
}

export default sendTelegramm