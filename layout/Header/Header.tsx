import React from "react"
import Link from "next/link"
import Image from "next/image"
import BurgerBtn from "../BurgerBtn/BurgerBtn"
import { 
	ApplicationBtn,
	YMetrika
 } from "../../components"
import styles from "./Header.module.scss"
import classNames from "classnames"

interface IHeaderProps {
	handleNavBtnClick?: () => void
}

const Header: React.FC<IHeaderProps> = ({ handleNavBtnClick }) => {
	const [isNavActive, setIsNavActive] = React.useState<boolean>(false)
	const [services, setServices] = React.useState<boolean>(false)
	const [about, setAbout] = React.useState<boolean>(false)
	const [portfolio, setPortfolio] = React.useState<boolean>(false)
	const [blog, setBlog] = React.useState<boolean>(false)
	const [faq, setFaq] = React.useState<boolean>(false)
	const [contacts, setContacts] = React.useState<boolean>(false)

	const handleNavClick = (): void => {
		setIsNavActive((pre) => !pre)
	}
	const navActive = `${!isNavActive && styles.header__navLink_active}`

	React.useEffect(() => {
		const loc = location.pathname.split("/").pop()!
		if (loc.length > 0) {
			if (loc === "uslugi") {
				setServices(true)
			}
			if (loc === "portfolio") {
				setPortfolio(true)
			}
			if (loc === "o-nas") {
				setAbout(true)
			}
			if (loc === "blog") {
				setBlog(true)
			}
			if (loc === "faq") {
				setFaq(true)
			}
			if (loc === "contact") {
				setContacts(true)
			}
		}
	}, [services, portfolio, about, blog, faq, contacts])

	return (
		<header className={styles.header}>
			<YMetrika />
			<div className={styles.header__mobileMenu}>
				<BurgerBtn handleNavBtnClick={handleNavBtnClick} />
				<Link href='/'>
					<a className={styles.header__logoLink}>
						<Image
							src='/images/happyPC-logo.webp'
							alt='happyPC-logo'
							width={95}
							height={68}
						/>
					</a>
				</Link>
			</div>
			<div className={styles.header__container}>
				<div className={styles.header__navContainer}>
					<Link href='/'>
						<a >
							<Image
								src='/images/happyPC-logo.webp'
								alt='happyPC-logo'
								width={120}
								height={76}
							/>
						</a>
					</Link>
					<nav className={styles.header__nav}>
						<ul className={styles.header__navLinks}>
							<li>
								<Link href='/uslugi'>
									<a
										className={classNames(
											styles.header__navLink,
											services ? navActive : "",
										)}
										onClick={handleNavClick}>
										Услуги
									</a>
								</Link>
							</li>
							<li>
								<Link href='/portfolio'>
									<a
										className={classNames(
											styles.header__navLink,
											portfolio ? navActive : "",
										)}
										onClick={handleNavClick}>
										Портфолио
									</a>
								</Link>
							</li>
							<li>
								<Link href='/o-nas'>
									<a
										className={classNames(
											styles.header__navLink,
											about ? navActive : "",
										)}
										onClick={handleNavClick}>
										О нас
									</a>
								</Link>
							</li>
							<li>
								<Link href='/faq'>
									<a
										className={classNames(
											styles.header__navLink,
											faq ? navActive : "",
										)}
										onClick={handleNavClick}>
										FAQ
									</a>
								</Link>
							</li>
							<li>
								<Link href='/contact'>
									<a
										className={classNames(
											styles.header__navLink,
											contacts ? navActive : "",
										)}
										onClick={handleNavClick}>
										Контакты
									</a>
								</Link>
							</li>
							<li>
								<a
									href='https://bitgid.net/'
									className={styles.header__navLink}
									target='_blank'
									rel='noopener noreferrer'
									>
									Форум
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<ApplicationBtn />
			</div>
		</header>
	)
}

export default Header
