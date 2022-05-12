import React from "react"
import { IPortfolioCase } from "../../types"
import Card from "../Card/index"
import styles from "./Gallery.module.scss"

interface IGalleryProps {
	initialCards?: IPortfolioCase[]
	countCards?: number
}

const Gallery: React.FC<IGalleryProps> = ({ 
	initialCards,
	countCards 
}) => {
	return (
		<ul className={styles.gallery}>
			{initialCards &&
				initialCards.slice(0, countCards).map((card) => {
					return (
						<Card
							key={card.id}
							card={card}
							attributes={card.attributes}
						/>
					)
				})}
		</ul>
	)
}

export default Gallery
