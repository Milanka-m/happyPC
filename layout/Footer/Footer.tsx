import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.scss"

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.footer__container}>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Ждем вас</span>
					<ul className={styles.footer__timeline}>
						<li>
							<p className={styles.footer__timeText}>Пн. – Пт.</p>
							<p className={styles.footer__timeText}>10 00 – 18 00</p>
						</li>
						<li>
							<p className={styles.footer__timeText}>Сб.</p>
							<p className={styles.footer__timeText}>10 00 – 14 00</p>
						</li>
						<li>
							<p className={styles.footer__timeText}>Вс.</p>
							<p className={styles.footer__timeText}>выходной</p>
						</li>
					</ul>
				</li>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Меню</span>
					<ul className={styles.footer__navLinks}>
						<li>
							<Link href='/o-nas'>
								<a className={styles.footer__navLink}>
									О нас
								</a>
							</Link>
						</li>
						<li>
							<Link href='/portfolio'>
								<a className={styles.footer__navLink}>
									Портфолио
								</a>
							</Link>
						</li>
						<li>
							<Link href='/faq'>
								<a className={styles.footer__navLink}>
									FAQ
								</a>
							</Link>
						</li>
						<li>
							<Link href='/privacy-policy'>
								<a className={styles.footer__navLink}>
									Политика конфиденциальности
								</a>
							</Link>
						</li>
					</ul>
					<ul className={styles.footer__socialLinks}>
						<li>
							<a
								href='https://vk.com/happy_pc'
								className={styles.footer__socialLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/vk-icon.webp'
									alt='vk-icon'
									width={32}
									height={32}
								/>
							</a>
						</li>
						<li>
							<a
								href='https://t.me/happypc'
								className={styles.footer__socialLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/telegram-icon.webp'
									alt='telegram-icon'
									width={32}
									height={32}
								/>
							</a>
						</li>
						<li>
							<a
								href='https://discord.gg/a8d6S4dXua'
								className={styles.footer__socialLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/discord-icon.webp'
									alt='discord-icon'
									width={32}
									height={32}
								/>
							</a>
						</li>
						<li>
							<a
								href='https://zen.yandex.ru/happypcpro'
								className={styles.footer__socialLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/yandex-icon.webp'
									alt='yandex-icon'
									width={32}
									height={32}
								/>
							</a>
						</li>
						<li>
							<a
								href='https://www.youtube.com/c/DaniilGerasimov/videos'
								className={styles.footer__socialLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/youtube-icon.webp'
									alt='youtube-icon'
									width={32}
									height={32}
								/>
							</a>
						</li>
					</ul>
				</li>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Услуги</span>
					<ul className={styles.footer__navLinks}>
						<li>
							<Link href='/uslugi/sborka-kompyutera'>
								<a className={styles.footer__navLink}>
									Сборка компьютера
								</a>
							</Link>
						</li>
						<li>
							<Link href='/uslugi/apgreid-kompyutera'>
								<a className={styles.footer__navLink}>
									Апгрейд компьютера
								</a>
							</Link>
						</li>
						<li>
							<Link href='/uslugi/podborka-komplektuyushih'>
								<a className={styles.footer__navLink}>
									Подборка комплектующих
								</a>
							</Link>
						</li>
						<li>
							<Link href='/uslugi/remont-kompyutera'>
								<a className={styles.footer__navLink}>
									Ремонт компьютера
								</a>
							</Link>
						</li>
						<li>
							<Link href='/zakazat-sborku'>
								<a className={styles.footer__navLink}>
									Заказать сборку
								</a>
							</Link>
						</li>
					</ul>
				</li>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Контакты</span>
					<ul className={styles.footer__contactsList}>
						<li>
							<p className={styles.footer__timeText}>
								Белгород, Преображенская улица, 78Б
							</p>
						</li>
						<li className={styles.footer__itemLink}>
							<a className={styles.footer__contactsLink} href='tel:+79040888888'>
								8 904 088 88 88
							</a>
						</li>
						<li className={styles.footer__itemLink}>
							<a
								className={styles.footer__contactsLink}
								href='mailto:happypcpro@mail.ru'>
								happypcpro@mail.ru
							</a>
						</li>
					</ul>
					<iframe 
						src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=65879527354" 
						width="240" 
						height="150"  
						frameBorder="0">
					</iframe>
				</li>
			</ul>
			<p className={styles.footer__copyright}>
				&copy; {new Date().getFullYear()} HappyPC. Все права защищены.
			</p>
		</footer>
	)
}

export default Footer