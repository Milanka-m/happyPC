import type { NextPage } from "next"
import React from "react"
import Layout from "../../../layout/Layout"
import styles from "../../index.module.scss"
import {
	WebsiteDev,
	Price,
	Questions,
	ApplicationBtn,
	Strategy
} from "../../../components"

const ComputerUpgrade: NextPage = () => {

	return (
		<Layout
			title='Апгрейд компьютера &nbsp;— HappyPC'
			desc='Апгрейд компьютера от счастливой мастерской HappyPC'
			ogTitle='Апгрейд компьютера &nbsp;— HappyPC'>
			<WebsiteDev
				title='Апгрейд компьютера'
				subtitle='Контракт, гарантия, качество.'
				paragraph1='У каждого владельца компьютера рано или поздно 
				возникают вопросы: Как из слабого компьютера сделать мощный, 
				как сделать чтобы компьютер стал мощнее, как можно улучшить 
				старый комп?'
				paragraph2='Задавали такой вопрос себе? В этом случае, 
				отличным решением будет воспользоваться нашей услугой — 
				апгрейд компьютера на заказ.'
				imgWebDev='/images/computer-assembly-img-2.webp'
			/>
			<Price 
				priceimg='/images/computer-assembly-img-2-2.webp'
			>
				<div className={styles.price__contentBonuses}>
					<ul className={styles.price__lists}>
						<li>
							<p className={styles.price__item}>
								Оценка и анализ возможности апгрейда
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Подбор комплектующих под ваш бюджет
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Работы по апгрейду комплектующих
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Стресс-тесты обновленного ПК
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Апгрейд компьютера
							</p>
						</li>
					</ul>
				</div>
				<ApplicationBtn />
           </Price>
		   <Strategy />
		   <Questions />
		</Layout>
	)
}

export default ComputerUpgrade