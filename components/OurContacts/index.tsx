import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./OurContacts.module.scss"
import classNames from "classnames"

const OurContacts: React.FC = () => {
	return (
		<section className={styles.ourContacts}>
			<Fade bottom>
				<div className={styles.ourContacts__container}>
					<div className={styles.ourContacts__infoContainer}>
						<h2 className={styles.ourContacts__title}>
							Наши <span>Контакты</span>
						</h2>
						<p className={styles.ourContacts__text}>
							Посетите наш офис HappyPC или отправьте нам
							электронное письмо в любое время. Если у вас есть вопросы,
							пожалуйста, не стесняйтесь обращаться к нам.
						</p>
						<ul className={styles.ourContacts__links}>
							<Fade bottom>
								<li>
									<div className={styles.ourContacts__cardText}>
										<span>
											<Image
												src='/images/icon-8.webp'
												alt='icon'
												width={75}
												height={75}
												objectFit='contain'
											/>
										</span>
										<article className={styles.ourContacts__info}>
											<span className={styles.ourContacts__infoTitle}>
												Офис
											</span>
											<p className={styles.ourContacts__infoText}>
												Белгород, ул. Преображенская 78Б
											</p>
										</article>
									</div>
								</li>
							</Fade>
							<Fade top>
								<li>
									<a
										className={styles.ourContacts__link}
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
										<article className={styles.ourContacts__info}>
											<span
												className={classNames(
													styles.ourContacts__infoTitle,
													styles.ourContacts__infoTitle_color,
												)}>
												Поддержка
											</span>
											<p className={styles.ourContacts__infoText}>
												happypcpro@mail.ru
											</p>
										</article>
									</a>
								</li>
							</Fade>
							<li>
								<a className={styles.ourContacts__link} href='tel:+79040888888'>
									<span>
										<Image
											src='/images/icon-6.webp'
											alt='icon'
											width={65}
											height={65}
											objectFit='contain'
										/>
									</span>
									<article className={styles.ourContacts__info}>
										<span
											className={classNames(
												styles.ourContacts__infoTitle,
												styles.ourContacts__infoTitle_color,
											)}>
											Телефон
										</span>
										<p className={styles.ourContacts__infoText}>
											8 904 088 88 88
										</p>
									</article>
								</a>
							</li>
							<li>
								<a
									className={styles.ourContacts__link}
									href='mailto:happypcpro@mail.ru'>
									<span>
										<Image
											src='/images/icon-5.webp'
											alt='icon'
											width={60}
											height={60}
											objectFit='contain'
										/>
									</span>
									<article className={styles.ourContacts__info}>
										<span
											className={classNames(
												styles.ourContacts__infoTitle,
												styles.ourContacts__infoTitle_color,
											)}>
											Email
										</span>
										<p className={styles.ourContacts__infoText}>
											happypcpro@mail.ru
										</p>
									</article>
								</a>
							</li>
						</ul>
					</div>
					<iframe 
						src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=65879527354" 
						width="600" 
						height="450"  
						frameBorder="0">
					</iframe>
				</div>
			</Fade>
		</section>
	)
}

export default OurContacts