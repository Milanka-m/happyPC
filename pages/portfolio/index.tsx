import type { GetServerSideProps, NextPage } from "next"
import React from "react"
import Layout from "../../layout/Layout"
import { AdditionalMenu, Gallery } from "../../components"
import styles from "./index.module.scss"
import { IPortfolioCase } from "../../types"
import { portfoliocasesApi } from "../../stores/api"

interface IPortfolioProps {
	cards: IPortfolioCase[]
}
const Portfolio: NextPage<IPortfolioProps> = ({ cards }) => {
	const [isNavActive, setIsNavActive] = React.useState<string>("all")
	const [initialCards, setInitialCards] = React.useState<IPortfolioCase[]>(
		cards && cards,
	)

	const handleCardClick = (param: string): void => {
		const cardsFilter = cards && cards.filter((card) =>
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
			title='Портфолио &nbsp;— HappyPC'
			desc='Портфолио &nbsp;— HappyPC'
			ogTitle='Портфолио &nbsp;— HappyPC'>
			<section className={styles.mainPortfolio}>
				<div className={styles.mainPortfolio__container}>
					<h1 className={styles.mainPortfolio__title}>Портфолио</h1>
					<span className={styles.mainPortfolio__nav}>
						<AdditionalMenu
							isNavActive={isNavActive}
							handleCardClick={handleCardClick}
						/>
					</span>
					<div className={styles.mainPortfolio__content}>
						{initialCards && initialCards.length > 0 ? (
							<Gallery initialCards={initialCards} />
						) : (
							<></>
						)}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const cards = await portfoliocasesApi.show()
	return {
		props: { cards: cards.data.data },
	}
}

export default Portfolio
