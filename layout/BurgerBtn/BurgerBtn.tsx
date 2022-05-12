import React from "react"
import styles from "./BurgerBtn.module.scss"

interface IBurgerBtnProps {
	handleNavBtnClick?: () => void
}

const BurgerBtn: React.FC<IBurgerBtnProps> = ({ handleNavBtnClick }) => {
	return (
    <div className={styles.burgerMenu}>
      <input 
        id={styles.burgerMenu__toggle} 
        type='checkbox'
        onClick={handleNavBtnClick} 
      />
      <label className={styles.burgerMenu__btn} 
        htmlFor={styles.burgerMenu__toggle}>
        <span className={styles.burgerMenu__span}></span>
      </label>
		</div>
	)
}

export default BurgerBtn
