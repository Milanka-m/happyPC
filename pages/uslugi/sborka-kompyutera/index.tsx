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

const ComputerAssembly: NextPage = () => {

	return (
		<Layout
			title='Сборка компьютера &nbsp;— HappyPC'
			desc='Сборка компьютера &nbsp;— HappyPC'
			ogTitle='Сборка компьютера &nbsp;— HappyPC'>
			<WebsiteDev
				title='Сборка компьютера'
				subtitle='Контракт, гарантия, качество.'
				paragraph1='Наша мастерская счастливых компьютеров предлагает 
				вам воспользоваться услугой индивидуальной сборки компьютера. 
				Услуга по сборке компьютеров доступна для частных и юридических лиц.'
				paragraph2='На рынке компьютерного железа и готовых компьютеров, 
				у вас могут возникнуть задачи требующие индивидуального подхода. 
				Именно поэтому предлагаем воспользоваться нашей новой услугой — 
				сборка компьютера на заказ.'
				paragraph3='Определиться с необходимыми характеристиками 
				(производительность, объем ОЗУ и жесткого диска, и др.) 
				и комплектующими Вам поможет наш сборщик Никита. Он качественно 
				и быстро подберет и соберет  необходимые именно Вам конфигурацию. 
				В результате Вы получите качественно собранный системный блок 
				и оптимальное сочетание цена/качество!'
				imgWebDev='/images/computer-assembly-img-1.webp'
			/>
			<Price 
				priceimg='/images/computer-assembly-img-1-2.webp'
			>
				<div className={styles.price__contentBonuses}>
					<ul className={styles.price__lists}>
						<li>
							<p className={styles.price__item}>
								Проверка комплектующих на работоспособность
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Грамотная установка комплектующих в корпус
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Аккуратный кабель-менеджмент
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Настройка BIOS
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Стресс-тест системы после сборки
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

export default ComputerAssembly