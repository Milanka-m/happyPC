import React from "react"
import styles from "./AdditionalMenu.module.scss"
import classNames from "classnames"

interface IAdditionalMenuProps {
  isNavActive?: string
  handleCardClick: (param:string) => void
}

const AdditionalMenu: React.FC<IAdditionalMenuProps> = ({
  isNavActive,
  handleCardClick
}) => {
  
	return (
		<nav className={styles.additionalMenu__nav}>
      <ul className={styles.additionalMenu__navLinks}>
        <li>
          <ul className={styles.additionalMenu__item}>
            <li>
              <p 
                className={classNames(styles.additionalMenu__navLink,
                  {[styles.additionalMenu__navLink_active]: isNavActive === 'all' })}
                onClick={() => handleCardClick('all')}
              >
                Все
              </p>
            </li>
            <li>
              <p 
                className={classNames(styles.additionalMenu__navLink, 
                  {[styles.additionalMenu__navLink_active]: isNavActive === 'amd'})}
                onClick={() => handleCardClick('amd')}
              >
                AMD
              </p>
            </li>
            <li>
              <p 
                className={classNames(styles.additionalMenu__navLink, 
                  {[styles.additionalMenu__navLink_active]: isNavActive === 'intel'})}
                  onClick={() => handleCardClick('intel')}
              >
                Intel
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul className={styles.additionalMenu__item}>
            <li>
              <p 
                className={classNames(styles.additionalMenu__navLink, 
                  {[styles.additionalMenu__navLink_active]: isNavActive === '<150000'})}
                  onClick={() => handleCardClick('<150000')}
              >
                Бюджет до 150000 ₽.
              </p>
            </li>
            <li>
              <p 
                className={classNames(styles.additionalMenu__navLink, 
                  {[styles.additionalMenu__navLink_active]: isNavActive === '<500000'})}
                onClick={() => handleCardClick('<500000')}
              >
                Бюджет до 500000 ₽.
              </p>
            </li>
            <li>
              <p 
                className={classNames(styles.additionalMenu__navLink, 
                  {[styles.additionalMenu__navLink_active]: isNavActive === '<1000000'})}
                onClick={() => handleCardClick('<1000000')}
              >
                Бюджет до 1000000 ₽.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
	)
}

export default AdditionalMenu
