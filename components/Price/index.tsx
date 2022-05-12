import React from "react"
import Fade from 'react-reveal/Fade'
import Image from "next/image"
import styles from "./Price.module.scss"

interface IPriceProps {
  priceimg: string
  children: any
}

const Price: React.FC<IPriceProps> = ({
  priceimg,
  children
}) => {
	return (
      <section className={styles.price}>
        <div className={styles.price__container}>
          <Fade top>
            <article className={styles.price__imageContainer}>
              <span className={styles.price__image}>
                <Image
                  src={priceimg}
                  alt='casual-colleagues'
                  width={650}
                  height={500}
                  objectFit='cover'
                />
              </span>
            </article>
          </Fade>
          <Fade bottom>
            <div className={styles.price__content}>
              <h2 className={styles.price__title}>
                Что входит в стоимость
              </h2>
                {children}
            </div>
          </Fade>
        </div>
      </section>
	)
}

export default Price