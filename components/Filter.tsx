import React from 'react'
import ButtonFilter from '../components/buttons/ButtonFilter'
import styles from '../styles/Filter.module.css'

export default function Filter() {

  const showValue = (e: any) => {
    console.log(e.target.innerText);
  }
  return (
    <div className={styles.filter}>
      <div className={styles.buttonBlock}>
        <ButtonFilter text='Всі' active/>
        <ButtonFilter text='Мясні'/>
        <ButtonFilter text='Вегетаріанська'/>
        <ButtonFilter text='Гриль'/>
        <ButtonFilter text='Гострі'/>
        <ButtonFilter text='Закриті'/>
      </div>

      <div className={styles.select_block}>
        Сортування по:  
        <select>
          <option>по пулярності</option>
          <option>по ціні</option>
          <option>по алфавіту</option>
        </select>
      </div>
    </div>
  )
}
