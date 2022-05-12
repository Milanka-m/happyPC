import React from "react"
import Link from "next/link"
import styles from "./ApplicationBtn.module.scss"

const ApplicationBtn: React.FC = () => {
	return (
		<Link href='/zakazat-sborku'>
      <a className={styles.applicationBtn__link}>
        <div className={styles.applicationBtn__arrow}>
          <span className={styles.applicationBtn__arrowLeft}></span>
          <span className={styles.applicationBtn__arrowRight}></span>
        </div>
        Заказать сборку
      </a>
    </Link>
	)
}

export default ApplicationBtn
