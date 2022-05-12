import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ApplicationBtn } from "../../components"
import styles from "./NavBar.module.scss"

const NavBar: React.FC = () => {
	return (
		<div className={styles.navBar__container}>
			<div className={styles.navBar__navContainer}>
				<Link href='/'>
					<a>
						<Image
							src='/images/happyPC-logo.webp'
							alt='logo happyPC'
							width={96}
							height={72}
						/>
					</a>
				</Link>
				<nav className={styles.navBar__nav}>
					<ul className={styles.navBar__navLinks}>
						<li>
							<Link href='/uslugi'>
								<a className={styles.navBar__navLink}>Услуги</a>
							</Link>
						</li>
						<li>
							<Link href='/portfolio'>
								<a className={styles.navBar__navLink}>Портфолио</a>
							</Link>
						</li>
						<li>
							<Link href='/o-nas'>
								<a className={styles.navBar__navLink}>О нас</a>
							</Link>
						</li>
						<li>
							<Link href='/faq'>
								<a className={styles.navBar__navLink}>FAQ</a>
							</Link>
						</li>
						<li>
							<Link href='/contact'>
								<a className={styles.navBar__navLink}>Контакты</a>
							</Link>
						</li>
						<li>
							<a
								href='https://bitgid.net/'
								className={styles.navBar__navLink}
								target='_blank'
								rel='noopener noreferrer'
								>
								Форум
							</a>
						</li>
					</ul>
				</nav>
				<ApplicationBtn />
			</div>
		</div>
	)
}

export default NavBar
