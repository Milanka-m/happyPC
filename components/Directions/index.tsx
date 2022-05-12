import React from "react"
import Link from "next/link"
import Fade from 'react-reveal/Fade'
import styles from "./Directions.module.scss"

interface IDirectionsProps {
  title?: string
  spanItem1?: string
  spanItem2?: string
  spanItem3?: string
  spanItem4?: string
  textItem1?: string
  textItem2?: string
  textItem3?: string
  textItem4?: string
}

const Directions: React.FC<IDirectionsProps> = ({
  title,
  spanItem1,
  spanItem2,
  spanItem3,
  spanItem4,
  textItem1,
  textItem2,
  textItem3,
  textItem4,
}) => {
	return (
    <section className={styles.directions}>
      <Fade bottom>
        <h2 className={styles.directions__title}>
          {title}
        </h2>
        <ul id={styles.directions__lists}>
          <li>
            <p className={styles.directions__item}>
              <Link href='/uslugi/sborka-kompyutera'>
                <a>{spanItem1}</a>
              </Link>
              {textItem1}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/uslugi/apgreid-kompyutera'>
                <a>{spanItem2}</a>
              </Link>
              {textItem2}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/uslugi/podborka-komplektuyushih'>
                <a>{spanItem3}</a>
              </Link>
              {textItem3}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/uslugi/remont-kompyutera'>
                <a>{spanItem4}</a>
              </Link>
              {textItem4}
            </p>
          </li>
        </ul>
      </Fade>
    </section>
	)
}

export default Directions