import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import styles from "./Cases.module.scss"
import classNames from "classnames"

const Cases: React.FC = () => {
	return (
		<section className={styles.cases}>
			<div className={styles.cases__container}>
				<h1 className={styles.cases__title}>
					HAPPYPC - Сборка счастливых ПК на заказ!
				</h1>
				<p className={styles.cases__subtitle}>
					Наш сборщик Никита поможет подобрать комплектацию игрового ПК 
					и проверит комплектующие на совместимость. А также мы собираем 
					счастливые  компьютеры для игр под заказ и доставляем по всей России.
				</p>
				<ul className={styles.cases__cards}>
					<li>
						<Fade bottom>
							<iframe 
								width="100%"
								height="315" 
								src="https://www.youtube.com/embed/V3AVrwTWZKY" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</Fade>
					</li>
					<li>
						<Fade right>
							<iframe 
								width="100%" 
								height="315" 
								src="https://www.youtube.com/embed/JUFs0zY0Jis" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</Fade>
					</li>
					<li>
						<Fade top>
							<iframe 
								width="100%" 
								height="315" 
								src="https://www.youtube.com/embed/Q47zmgqjjX0" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</Fade>	
					</li>
					{/* <li>
						<Fade bottom>
							<iframe 
								width="100%"
								height="315" 
								src="https://www.youtube.com/embed/VYf_AWNYYRs" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</Fade>
					</li>
					<li>
						<Fade right>
							<iframe 
								width="100%" 
								height="315" 
								src="https://www.youtube.com/embed/S9s7H_36dYM" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</Fade>
					</li>
					<li>
						<Fade top>
							<iframe 
								width="100%" 
								height="315" 
								src="https://www.youtube.com/embed/UbeQ-G-g1RI" 
								title="YouTube video player" 
								frameBorder="0" 
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
								allowFullScreen>
							</iframe>
						</Fade>
					</li> */}
				</ul>
			</div>
		</section>
	)
}

export default Cases
