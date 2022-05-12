import React from "react"
import Fade from "react-reveal/Fade"
import styles from "./Questions.module.scss"

const Questions: React.FC = () => {
	return (
      <section className={styles.questions}>
        <div className={styles.questions__container}>
          <h2 className={styles.questions__title}>
            Часто задаваемые вопросы
          </h2>
          <p className={styles.questions__subtitle}>
            По всем вопросам, ответы на которые вы не смогли найти, обращайтесь в разделе контакты или звоните.
          </p>
          <ul className={styles.questions__list}>
            <Fade bottom>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Какая минимальная цена ПК у вас?
                  </p>
                </div>
                <input id={styles.questions__itemSelectId1} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId1}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    Минимум 60.000 рублей.
                  </p>
                </div>
              </li>
            </Fade>
            <Fade top>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Каким способом можно оплатить заказ?
                  </p>
                </div>
                <input id={styles.questions__itemSelectId2} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId2}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    Способы оплаты:
                  </p>
                  <ul id={styles.questions__itemSelectList}>
                    <li>
                      <p className={styles.questions__itemSelectListText}>
                        оплата наличными или банковской картой в офисе Белгорода;
                      </p>
                    </li>
                    <li>
                      <p className={styles.questions__itemSelectListText}>
                        оплата по счету для физических и юридических лиц;
                      </p>
                    </li>
                    <li>
                      <p className={styles.questions__itemSelectListText}>
                        оплата с помощью сервис он-лайн кредитования.
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Какие документы я получу после оплаты?
                  </p>
                </div>
                <input id={styles.questions__itemSelectId3} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId3}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    После оплаты вы получите кассовый чек, накладную и гарантийный талон.
                  </p>
                </div>
              </li>
            </Fade>
            <Fade top>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Я переживаю, что не получу свой заказ, сделав предоплату.
                  </p>
                </div>
                <input id={styles.questions__itemSelectId4} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId4}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    Все операции с оплатой производятся согласно закону РФ, с бланком предоплаты и кассовым чеком.
                  </p>
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Работаете ли вы по договору?
                  </p>
                </div>
                <input id={styles.questions__itemSelectId5} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId5}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    Да, по желанию клиента мы можем заключить договор.
                  </p>
                </div>
              </li>
            </Fade>
            <Fade top>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Когда я получу свой ПК после заказа?
                  </p>
                </div>
                <input id={styles.questions__itemSelectId6} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId6}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    Всё зависит от расстояния от Белгорода к Вашему городу 
                    и способу доставки. В среднем до недели.
                  </p>
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Может ли изменятся стоимость ПК в процессе сборки?
                  </p>
                </div>
                <input id={styles.questions__itemSelectId7} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId7}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    Как правило, после заключения договора, указанная 
                    в нем стоимость изменятся не может. Однако, как 
                    показывает практика, мы часто сталкиваемся с 
                    изменениями комплектующих по желанию заказчика, что приводит к увеличению 
                    или уменьшению стоимости.
                    В редких случаях цена меняется из-за возникших 
                    дополнительных работ.
                  </p>
                </div>
              </li>
              </Fade>
          </ul>
        </div>
      </section>
	)
}

export default Questions