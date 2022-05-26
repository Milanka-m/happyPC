import type { GetServerSideProps, NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import Layout from "../../layout/Layout"
import { WebsiteSlider } from "../../components"
import styles from "./index.module.scss"
import { portfoliocasesApi } from "../../stores/api"
import { IPortfolioCase } from "../../types"

interface ICurrentProps {
	keyses: IPortfolioCase[]
	cards: IPortfolioCase[]
}

const KeysCurrent: NextPage<ICurrentProps> = ({ keyses, cards }) => {
	const keysesData = keyses[0]!

	return (
		<Layout
			title={`${keysesData && keysesData.attributes.title} — HappyPC`}
			desc={`${keysesData && keysesData.attributes.desc}`}
			ogTitle={`${keysesData && keysesData.attributes.title} — HappyPC`}>
			<section className={styles.portfolioСase}>
				<div className={styles.portfolioСase__container}>
					<Link href={keysesData.attributes.navlink.navlink!}>
						<a className={styles.portfolioСase__navLink}>
							<span>
								<Image
									src='/images/label-icon.webp'
									alt='label-icon'
									width={18}
									height={18}
									objectFit='contain'
								/>
							</span>
							{keysesData && keysesData.attributes.navlink.linkname}
						</a>
					</Link>
					
					<h1 className={styles.portfolioСase__title}>
						{keysesData && keysesData.attributes.title}
					</h1>
					<WebsiteSlider 
						images={
							keysesData && keysesData.attributes.images.data.map((item) => `https://admin.happypc.pro${item.attributes.formats.medium.url}`)
						} 
					/>
					<ul className={styles.portfolioСase__socialLinks}>
						<li>
							<a 
								href={keysesData && keysesData.attributes.social.sociallink}  
								className={styles.portfolioСase__socialLink} 
								target='_blank' rel='noopener noreferrer'>
									<Image 
										src='/images/vk-icon.webp' 
										alt='vk-icon' 
										width={30} 
										height={30}
									/>
							</a>
						</li>
					</ul>
					<table className={styles.portfolioСase__table}>
						<tbody>
							<tr 
								className={styles.portfolioСase__tableGroupHead}>
								<th 
									className={styles.portfolioCase__tableTh}
									colSpan={2}>
									<span>
										Комплектующие
									</span>
								</th>
							</tr>
							<tr>
								<th 
									className={styles.portfolioСase__tablePropertyName}>
									<span 
										className={styles.portfolioСase__tableUkIcon}>
												<Image 
													src='/images/video-card-icon.webp' 
													alt='video-card' 
													width={25} 
													height={25}
												/>
										</span>
									Видеокарта 
								</th>
								<td>
									<ul>
										<li className={styles.portfolioСase__tableSpecItem}>
											{keysesData && keysesData.attributes.videocard}
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th className={styles.portfolioСase__tablePropertyName}>
									<span 
										className={styles.portfolioСase__tableUkIcon}>
											<Image 
												src='/images/cpu-icon.webp' 
												alt='cpu-icon' 
												width={25} 
												height={25}
											/>
									</span>
									Процессор 
								</th>
								<td>
									<ul>
										<li className={styles.portfolioСase__tableSpecItem}>
											{keysesData && keysesData.attributes.cpu}
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th className={styles.portfolioСase__tablePropertyName}>
									<span 
										className={styles.portfolioСase__tableUkIcon}>
											<Image 
												src='/images/motherboard-icon.webp' 
												alt='motherboard-icon' 
												width={25} 
												height={25}
											/>
									</span>
									Материнская плата 
								</th>
								<td>
									<ul>
										<li className={styles.portfolioСase__tableSpecItem}>
											{keysesData && keysesData.attributes.motherboard}
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th className={styles.portfolioСase__tablePropertyName}>
									<span 
										className={styles.portfolioСase__tableUkIcon}>
											<Image 
												src='/images/cooler-icon.webp' 
												alt='cooler-icon' 
												width={25} 
												height={25}
											/>
									</span>
									Охлаждение 
								</th>
								<td>
									<ul>
										<li className={styles.portfolioСase__tableSpecItem}>
											{keysesData && keysesData.attributes.cooler}
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th 
									className={styles.portfolioСase__tablePropertyName}>
									<span 
										className={styles.portfolioСase__tableUkIcon}>
											<Image 
												src='/images/ram-icon.webp' 
												alt='ram-icon' 
												width={25} 
												height={25}
											/>
									</span>
									Оперативная память 
								</th>
								<td>
									<ul>
										<li className={styles.portfolioСase__tableSpecItem}>
											{keysesData && keysesData.attributes.ram} 
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th className={styles.portfolioСase__tablePropertyName}>
									<span 
										className={styles.portfolioСase__tableUkIcon}>
											<Image 
												src='/images/ssd-icon.webp' 
												alt='ssd-icon' 
												width={23} 
												height={23}
											/>
									</span>
									SSD/HDD/ накопитель 
								</th>
								<td>
									<ul>
										<li className={styles.portfolioСase__tableSpecItem}>
											{keysesData && keysesData.attributes.drive}
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th className={styles.portfolioСase__tablePropertyName}>
									<span 
										className={styles.portfolioСase__tableUkIcon}>
											<Image 
												src='/images/power-unit-icon.webp' 
												alt='power-unit'
												width={27} 
												height={24}
											/>
									</span>
									Блок питания 
								</th>
								<td>
									<ul>
										<li className={styles.portfolioСase__tableSpecItem}>
											{keysesData && keysesData.attributes.powerunit}
										</li>
									</ul>
								</td>
							</tr>
							<tr>
								<th className={styles.portfolioСase__tablePropertyName}>
									<span className={styles.portfolioСase__tableUkIcon}>
										<Image 
											src='/images/computer-icon.webp' 
											alt='computer-icon' 
											width={25} 
											height={26}
										/>
									</span>
									Корпус 
								</th>
								<td>
									<ul>
										<li className={styles.portfolioСase__tableSpecItem}>
											{keysesData && keysesData.attributes.computercase}
										</li>
									</ul>
								</td>
							</tr>
							<tr 
								className={styles.portfolioСase__tableGroupHead}>
								<th 
									className={styles.portfolioCase__tableTh}
									colSpan={2}>
									<span >
										Цена за комплектующие
									</span>
								</th>
							</tr>
							<tr>
								<th className={styles.portfolioСase__tablePropertyName}>
									<span className={styles.portfolioСase__tableSpecPrice}>
										{`${keysesData && keysesData.attributes.pricecomponents} ₽`}
									</span>
								</th>
							</tr>
							<tr 
								className={styles.portfolioСase__tableGroupHead}>
								<th 
									className={styles.portfolioCase__tableTh}
									colSpan={2}>
									<span >
										Стоимость сборки
									</span>
								</th>
							</tr>
							<tr>
								<th 
									className={styles.portfolioСase__tablePropertyName}
									colSpan={2}>
									<span className={styles.portfolioСase__tableSpecPrice}>
										{`${keysesData && keysesData.attributes.priceassembly} ₽`}
									</span>
								</th>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</Layout>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const cards = await portfoliocasesApi.show()
	const { link } = params!
    const data = await portfoliocasesApi.showOne(String(link))

	return {
		props: { keyses: data.data.data, cards: cards.data.data },
	}
}

export default KeysCurrent