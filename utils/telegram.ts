const sendTelegramm = async (text: string): Promise<void> => {
	const chat_id: number = -1001711484353
	try {
		await fetch(
			`https://api.telegram.org/bot5377356728:AAFzkxg2-Vx0rJE6kg_yIjnPDVJahZ4kJbQ/sendMessage?chat_id=${chat_id}&text=${text}`,
		)
	} catch (error) {
		throw new Error(`Ошибка в отправке сообщения`)
	}
}

export default sendTelegramm