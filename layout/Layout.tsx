import React from "react"
import styles from "./Layout.module.scss"
import NavBar from "./NavBar/NavBar"
import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import Head from "next/head"
import classNames from "classnames"

interface ILayoutProps {
	title?: string
	desc?: string
	ogTitle?: string
}

const Layout: React.FC<ILayoutProps> = ({ children, title, desc, ogTitle }) => {
	
	const [isNavBarOpen, setIsNavBarOpen] = React.useState<boolean>(false)
	const [isArrowUp, setIsArrowUp] = React.useState<boolean>(false)

	const checkScrollTop = () => {
		if (!isArrowUp && window.pageYOffset > 400) {
			setIsArrowUp(true)
		} else if (isArrowUp && window.pageYOffset <= 400) {
			setIsArrowUp(false)
		}
	}

	React.useEffect(() => {
		checkScrollTop()
		window.addEventListener("scroll", checkScrollTop);
		return () => window.removeEventListener("scroll", checkScrollTop)
	}, [checkScrollTop])

	
	const scrollTop = () =>{
		window.scrollTo({top: 0, behavior: 'smooth'})
	}

	const handleNavBtnClick = (): void => {
		setIsNavBarOpen((pre) => !pre)
	}

	const navBarOpened = `${isNavBarOpen && styles.navBar_opened}`

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={desc} />
				<meta name='og:title' content={ogTitle} />
				<link 
				href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&family=Raleway:wght@300;400;500;700;900&display=swap' 
				rel='stylesheet' 
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={classNames(styles.page, navBarOpened)}>
				<NavBar />
				<div className={styles.root}>
					<Header 
						handleNavBtnClick={handleNavBtnClick}
					/>
					<Main>
						{children}
					</Main>
					<button 
						className={classNames(styles.upButton,
							{[styles.upButton_visibility]: isArrowUp })}
						onClick={scrollTop}
					>
					</button>
					
					<Footer/>
				</div>
			</div>
		</>
	)
}

export default Layout
