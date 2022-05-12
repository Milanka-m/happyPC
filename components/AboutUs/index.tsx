import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import Count from "../Count/index"
import styles from "./AboutUs.module.scss"

const AboutUs: React.FC = () => {
	return (
		<section className={styles.aboutUs}>
			<div className={styles.aboutUs__container}>
				<Fade bottom>
					<div className={styles.aboutUs__content}>
						<h2 className={styles.aboutUs__title}>О нас</h2>
						<p className={styles.aboutUs__paragraph}>
							В ноябре 2018 года, мы вместе с моим лучшим другом Иваном 
							сняли офис и начали взрослую предпринимательскую деятельность. 
							Сейчас наша команда состоит из 7 человек.
						</p>
						<p className={styles.aboutUs__paragraph}>
							Цель нашей команды, — сделать быстрый, качественный и недорогой ремонт 
							компьютеров и ноутбуков. Для этого мы закупаем самое лучшее оборудование, 
							учимся и развиваемся. Оптимизируем рабочие процессы и все это показываем Вам. 
							Мы хотим максимально положительно повлиять на сферу услуг в нашей нише 
							и показать, что иметь честный, добрый и позитивный сервис — 
							это настоящее счастье!)))
						</p>
						<Count />
						<Link href='/o-nas'>
							<a className={styles.aboutUs__cardLink}>Узнать больше</a>
						</Link>
					</div>
				</Fade>
				<Fade top>
					<span className={styles.aboutUs__img}>
						<Image
							src='/images/aboutus-img-1.webp'
							alt='about-us'
							width={680}
							height={453}
							objectFit='contain'
						/>
					</span>
				</Fade>
			</div>
		</section>
	)
}

export default AboutUs
