import type { GetServerSideProps, NextPage } from "next"
import React from "react"
import Link from "next/link"
import Layout from "../layout/Layout"
import {
	ApplicationBtn,
	Cases,
	AboutUs,
	AdditionalMenu,
	Gallery,
	Strategy,
} from "../components"
import styles from "./index.module.scss"
import { IPortfolioCase } from "../types"
import { portfoliocasesApi } from "../stores/api"

interface IHomeProps {
	cards: IPortfolioCase[]
}

const Home: NextPage<IHomeProps> = ({ cards }) => {
	const [countCards, setCountCards] = React.useState(0)
	const [isNavActive, setIsNavActive] = React.useState<string>("all")
	const [initialCards, setInitialCards] = React.useState<IPortfolioCase[]>([])

	React.useEffect(() => {
		if (cards && cards.length > 0) {
			const cardsAllFilter = cards.filter((card) =>
				card.attributes.category!.some((i) => i.category === "all"),
			)
			setInitialCards(cardsAllFilter)
		}
	}, [cards])

	React.useEffect(() => {
		initialCards.length >= 6 
		? setCountCards(6) 
		: setCountCards(initialCards.length)
	  }, [initialCards])

	const handleCardClick = (param: string): void => {
		const cardsFilter = cards.filter((card) =>
			card.attributes.category!.some((i) => i.category === param),
		)
		setInitialCards(cardsFilter)
		if (cardsFilter.length > 0) {
			const filterActive = cardsFilter[0].attributes.category!.filter((i) => i.category === param)
			if (filterActive) {
				setIsNavActive(filterActive[0].category!)
			}
		}
	}

	return (
		<Layout
			title='Сборка счастливых ПК на заказ &nbsp;— HappyPC'
			desc='Сборка компьютера от счастливой мастерской HappyPC'
			ogTitle='Сборка счастливых ПК на заказ &nbsp;— HappyPC'
		>
			<section className={styles.banner}>
				<div className={styles.banner__section}>
					<video 
						className={styles.banner__video}
						src="./video/msi-1.mp4" 
						autoPlay 
						muted
						// controls
						playsInline 
						loop
					>
						Тег video не поддерживается вашим браузером.
					</video>
					<div className={styles.banner__content}>
						<div className={styles.banner__textCenter}>
							<p className={styles.banner__title}>
								Прокачай свой ПК в HAPPYPC
							</p>
							<ApplicationBtn />
						</div>
					</div>
				</div>
			</section>
			<Cases />
			<AboutUs />
			<section className={styles.portfolio}>
				<div className={styles.portfolio__container}>
					<h2 className={styles.portfolio__title}>Портфолио</h2>
					<AdditionalMenu
						isNavActive={isNavActive}
						handleCardClick={handleCardClick}
					/>
					<div className={styles.portfolio__content}>
						{
							cards && cards.length > 0 
							? <Gallery 
								initialCards={initialCards}
								countCards={countCards} 
								/> 
							: <></>
						}
						<Link href='/portfolio'>
							<a className={styles.portfolio__cardLink}>
								Посмотреть все работы
							</a>
						</Link>
					</div>
				</div>
			</section>
			<Strategy />
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const cards = await portfoliocasesApi.show()
	return {
		props: { cards: cards.data.data },
	}
}

export default Home
