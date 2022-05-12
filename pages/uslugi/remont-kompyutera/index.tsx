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

const ComputerRepair: NextPage = () => {

	return (
		<Layout
			title='Ремонт компьютера &nbsp;— HappyPC'
			desc='Ремонт компьютера от счастливой мастерской HappyPC'
			ogTitle='Ремонт компьютера &nbsp;— HappyPC'>
				<WebsiteDev
				title='Ремонт компьютера'
				subtitle='Контракт, гарантия, качество.'
				paragraph1='Основная услуга нашей мастерской это 
				ремонт компьютеров и ноутбуков!'
				paragraph2='Вы всегда можете принести или прислать 
				нам своё устройство и мы его отремонтируем.'
				imgWebDev='/images/computer-assembly-img-4.webp'
			/>
			<Price 
				priceimg='/images/computer-assembly-img-4-2.webp'
			>
				<div className={styles.price__contentBonuses}>
					<ul className={styles.price__lists}>
						<li>
							<p className={styles.price__item}>
								Диагностика вашего устройства
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Консультация по ремонту вашего устройства
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Чистка и профилактика устройства
							</p>
						</li>
						<li>
							<p className={styles.price__item}>
								Замена и устранение неисправностей вашего компьютера
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

export default ComputerRepair