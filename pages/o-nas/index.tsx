import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import { 
  WebsiteDev,
  Directions,
  Questions
} from "../../components"

const About: NextPage = () => {
  return (
    <Layout 
      title='О нас &nbsp;— HappyPC' 
      desc='О нас &nbsp;— HappyPC'
      ogTitle='О нас &nbsp;— HappyPC'>
        <WebsiteDev 
          title='О нас'
          subtitle='Привет, Мир!))'
          paragraph1=' В ноябре 2018 года, мы вместе с моим лучшим 
          другом Иваном сняли офис и начали взрослую предпринимательскую 
          деятельность. Сейчас наша команда состоит из 7 человек.'
          paragraph2='Цель нашей команды, — сделать быстрый, качественный 
          и недорогой ремонт компьютеров и ноутбуков. Для этого мы закупаем 
          самое лучшее оборудование, учимся и развиваемся. Оптимизируем 
          рабочие процессы и все это показываем Вам. 
          Мы хотим максимально положительно повлиять на сферу услуг в нашей 
          нише и показать, что иметь честный, добрый и позитивный сервис — 
          это настоящее счастье!)))'
          imgWebDev='/images/aboutus-img-1.webp'
        >
          <Directions
            title='Мы работаем в таких направлениях:'
            spanItem1='Сборка компьютера '
            spanItem2='Апгрейд компьютера '
            spanItem3='Подборка комплектующих '
            spanItem4='Ремонт компьютера '
            textItem1='– Наша мастерская счастливых компьютеров предлагает вам воспользоваться услугой индивидуальной сборки компьютера. 
            Услуга по сборке компьютеров доступна для частных и юридических лиц.'
            textItem2='– У каждого владельца компьютера рано или поздно возникают вопросы: 
            Как из слабого компьютера сделать мощный, как сделать чтобы компьютер стал 
            мощнее, как можно улучшить старый комп?'
            textItem3='– Посмотрели много компьютеров но не нашли тот, 
            что подходит именно Вам? Никита подберет для Вас комплектующие, 
            основываясь на Ваших требованиях и задачах.'
            textItem4='– Основная услуга нашей мастерской это 
            ремонт компьютеров и ноутбуков!'
          />
        </WebsiteDev>
        <Questions />
    </Layout>
  )
}

export default About