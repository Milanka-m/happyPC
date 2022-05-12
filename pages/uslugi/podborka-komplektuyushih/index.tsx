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

const SelectComponents: NextPage = () => {

	return (
		<Layout
			title='Подборка комплектующих компьютера &nbsp;— HappyPC'
			desc='Подборка комплектующих компьютера от счастливой мастерской HappyPC'
			ogTitle='Подборка комплектующих компьютера &nbsp;— HappyPC'>
				<WebsiteDev
				title='Подборка комплектующих компьютера'
				subtitle='Контракт, гарантия, качество.'
				paragraph1='Посмотрели много компьютеров но не нашли 
				тот, что подходит именно Вам? Никита подберет для Вас 
				комплектующие, основываясь на Ваших требованиях и задачах.'
				paragraph2='Вместе с Никитой вы сможете выбрать количество 
				оперативной памяти, процессор, мощность блока питания, 
				видеокарту. Подобрать, всё что угодно, включая даже корпус!'
				paragraph3='Попутно мы  предоставим профессиональную консультацию 
				по оснащению компьютера, выбора железа, совместимости и любым 
				другим вопросам.'
				imgWebDev='/images/computer-assembly-img-3.webp'
			/>
			<Price 
				priceimg='/images/computer-assembly-img-3-2.webp'
			>
				<div className={styles.price__contentBonuses}>
					<ul className={styles.price__lists}>
						<li>
							<p className={styles.price__item}>
								Учтём ваши пожелания
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Добавим к ним нашу экспертизу по вопросам 
								совместимости и соотношению цена/качество
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Предложим оптимальную конфигурацию компьютера
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

export default SelectComponents