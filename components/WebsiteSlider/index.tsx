import classNames from "classnames"
import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import styles from "./WebsiteSlider.module.scss"

interface IButtonProps {
	className?: any
	style?: any
	onClick?: any
}

interface ISliderProps {
	className?: any
	images: string[]
}

const NextArrow: React.FC<IButtonProps> = ({ className, style, onClick }) => {
	return (
		<button
			className={classNames(className, "nextarr")}
			style={{ ...style }}
			onClick={onClick}>
			<div className={styles.nextarr__btn}>
				<span className={styles.nextarr__btnLeft}></span>
				<span className={styles.nextarr__btnRight}></span>
			</div>
		</button>
	)
}
const PrevArrow: React.FC<IButtonProps> = ({ className, style, onClick }) => {
	return (
		<button
			className={classNames(className, "prevarr")}
			style={{ ...style }}
			onClick={onClick}>
			<div className={styles.prevarr__btn}>
				<span className={styles.prevarr__btnLeft}></span>
				<span className={styles.prevarr__btnRight}></span>
			</div>
		</button>
	)
}

const WebsiteSlider: React.FC<ISliderProps> = ({ className, images }) => {
	const settings = {
		centerMode: true,
		centerPadding: "5px",
		dots: true,
		adaptiveHeight: true,
		accessibility: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		initialSlide: 0,
	}

	return (
		<div>
			<Slider {...settings} className={classNames(className, "websiteSlider")}>
				{images && images.map((item) => (
					<div key={item}>
						<Image
							src={item}
							alt='image'
							width={1000}
							height={680}
							objectFit='cover'
							quality={50}
							loading='lazy'
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default WebsiteSlider
