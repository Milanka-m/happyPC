import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import styles from "../index.module.scss"
import { 
  Contacts
} from "../../components"

const OurContacts: NextPage = () => {
  return (
    <Layout 
      title='Наши контакты &nbsp;— HappyPC' 
      desc='Наши контакты &nbsp;— HappyPC'
      ogTitle='Наши контакты &nbsp;— HappyPC'>
        <section className={styles.contacts}>
          <div className={styles.contacts__content}>
            <iframe 
              src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=65879527354" 
              width="600" 
              height="450"  
              frameBorder="0">
            </iframe>
            <Contacts />
          </div>
        </section>
    </Layout>
  )
}

export default OurContacts