import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import { Services, OurContacts } from "../../components"


const Uslugi: NextPage = () => {
  return (
    <Layout 
      title='Услуги &nbsp;— HappyPC'
      desc='Услуги от счастливой мастерской HappyPC'
      ogTitle='Услуги &nbsp;— HappyPC'>
        <Services />
        <OurContacts />
    </Layout>
  )
}

export default Uslugi