import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import styles from "./Services.module.scss"
import classNames from "classnames"

const Services: React.FC = () => {
	return (
		<section className={styles.services}>
			<div className={styles.services__container}>
				<h1 className={styles.services__title}>
					Простые решения для
					<br />
					<span>Сложных задач</span>
				</h1>
				<ul className={styles.services__cards}>
					<Fade bottom>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/icon-1.webp'
										alt='icon'
										width={75}
										height={75}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>
									Сборка компьютера
								</h2>
								<Link href='/uslugi/sborka-kompyutera'>
									<a className={styles.services__link}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/icon-2.webp'
										alt='icon'
										width={75}
										height={75}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>
									Апгрейд компьютера
								</h2>
								<Link href='/uslugi/apgreid-kompyutera'>
									<a
										className={classNames(
											styles.services__link,
											styles.services__link_color_pink,
										)}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade bottom>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/icon-3.webp'
										alt='icon'
										width={77}
										height={77}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>
									Подборка комплектующих
								</h2>
								<Link href='/uslugi/podborka-komplektuyushih'>
									<a className={styles.services__link}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
					<Fade top>
						<li>
							<div className={styles.services__card}>
								<span className={styles.services__cardImage}>
									<Image
										src='/images/icon-4.webp'
										alt='icon'
										width={75}
										height={75}
										objectFit='contain'
									/>
								</span>
								<h2 className={styles.services__cardTitle}>
									Ремонт компьютера
								</h2>
								<Link href='/uslugi/remont-kompyutera'>
									<a
										className={classNames(
											styles.services__link,
											styles.services__link_color_pink,
										)}>
										Подробнее
										<div className={styles.services__arrow}>
											<span className={styles.services__arrowLeft}></span>
											<span className={styles.services__arrowRight}></span>
										</div>
									</a>
								</Link>
							</div>
						</li>
					</Fade>
				</ul>
			</div>
		</section>
	)
}

export default Services
