import React from "react"
import Fade from "react-reveal/Fade"
import styles from "./Strategy.module.scss"
import classNames from "classnames"

const Strategy: React.FC = () => {
	return (
		<section className={styles.strategy}>
			<ul className={styles.strategy__block}>
				<Fade bottom>
					<li className={styles.strategy__item}>
						<h2 className={styles.strategy__title}>
							Этапы работ
						</h2>
						<span className={styles.strategy__subtitle}>
							Все этапы для взаимовыгодного 
							и продуктивного сотрудничества.
						</span>
					</li>
				</Fade>
				<Fade top>
					<li className={styles.strategy__item}>
						<p className={classNames(
							styles.strategy__description,
							styles.strategy__description_1
							)}>
							Оставьте заявку на сайте или позвоните нам.
						</p>
					</li>
				</Fade>
				<Fade bottom>
					<li className={styles.strategy__item}>
						<p className={classNames(
							styles.strategy__description,
							styles.strategy__description_2
						)}>
							Подробное обсуждение 
							выполнения сборки и подбора комплектующих.
						</p>
					</li>
				</Fade>
				<Fade bottom>
					<li className={styles.strategy__item}>
						<p className={classNames(
							styles.strategy__description,
							styles.strategy__description_3
						)}>
							Закупка комплектующих для вашего счастливого компьютера.
						</p>
					</li>
				</Fade>
				<Fade top>
					<li className={styles.strategy__item}>
						<p className={classNames(
							styles.strategy__description,
							styles.strategy__description_4
						)}>
							Проверка комплектующих на совместимость, все необходимые тесты.
						</p>
					</li>
				</Fade>
				<Fade bottom>
					<li className={styles.strategy__item}>
						<p className={classNames(
							styles.strategy__description,
							styles.strategy__description_5
						)}>
							Фото и видео отчет о выполненной работе. 
							Отправка вашего ПК.
						</p>
					</li>
				</Fade>	
			</ul>
		</section>	
	)
}

export default Strategy