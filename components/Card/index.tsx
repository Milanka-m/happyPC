import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Card.module.scss"
import { IPortfolioCase } from "../../types"

interface ICardProps {
   card: any
   key: any
   attributes: any
}

type ICard = IPortfolioCase & ICardProps

const Card: React.FC<ICard> = ({
	card
}) => {
	const loc = "portfolio"
	return (
		<li>
			<Link href={`/portfolio/${card.attributes.portfoliolink.portfoliolink}`}>
				<a className={styles.card}>
					<div
						className={styles.card__image}
						style={{ backgroundImage: `url(https://admin.happypc.pro${card.attributes.images.data[0].attributes.url})` }}>
						<Link href={card.attributes.navlink.navlink}>
							<a className={styles.card__navLink}>
								<span>
									<Image
										src='/images/label-icon.webp'
										alt='label-icon'
										width={18}
										height={18}
										objectFit='contain'
									/>
								</span>
								{card.attributes.navlink.linkname}
							</a>
						</Link>
						<h3 className={styles.card__title}>
							{card.attributes.title}
						</h3>
					</div>
				</a>
			</Link>
		</li>
	)
}

export default Card
