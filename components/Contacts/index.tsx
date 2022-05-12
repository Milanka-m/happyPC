import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./Contacts.module.scss"
import classNames from "classnames"

const Contacts: React.FC = () => {
	return (
		<Fade bottom>
			<div className={styles.contacts__container}>
				<h1 className={styles.contacts__title}>
					Наши <span>Контакты</span>
				</h1>
				<p className={styles.contacts__text}>
					Свяжитесь с нами, чтобы узнать, как наша компания может помочь вам
					собрать свой счастливый компьютер.
				</p>
				<ul className={styles.contacts__links}>
					<li>
						<div className={styles.contacts__cardText}>
							<span>
								<Image
									src='/images/icon-8.webp'
									alt='icon'
									width={65}
									height={65}
									objectFit='contain'
								/>
							</span>
							<ul className={styles.contacts__info}>
								<li>
									<a
										href='https://yandex.ru/maps/org/happy_pc/65879527354/?from=mapframe&ll=36.588184%2C50.599879&z=15'
										target='_blank'
										rel='noopener noreferrer'>
										<span className={styles.contacts__infoTitle}>Белгород</span>
										<p className={styles.contacts__infoText}>
											ул. Преображенская 78Б
										</p>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a
							className={styles.contacts__link}
							href='mailto:happypcpro@mail.ru'>
							<span>
								<Image
									src='/images/icon-7.webp'
									alt='icon'
									width={60}
									height={60}
									objectFit='contain'
								/>
							</span>
							<article className={styles.contacts__info}>
								<span
									className={classNames(
										styles.contacts__infoTitle,
										styles.contacts__infoTitle_color,
									)}>
									Email
								</span>
								<p className={styles.contacts__infoText}>
									happypcpro@mail.ru
								</p>
							</article>
						</a>
					</li>
					<li>
						<a className={styles.contacts__link} href='tel:+79040888888'>
							<span>
								<Image
									src='/images/icon-6.webp'
									alt='icon'
									width={65}
									height={65}
									objectFit='contain'
								/>
							</span>
							<article className={styles.contacts__info}>
								<span
									className={classNames(
										styles.contacts__infoTitle,
										styles.contacts__infoTitle_color,
									)}>
									Телефон
								</span>
								<p className={styles.contacts__infoText}>
									8 904 088 88 88
								</p>
							</article>
						</a>
					</li>
				</ul>
			</div>
		</Fade>
	)
}

export default Contacts
