import styles from '../../styles/ButtonFilter.module.css'
import { IButtonFilter } from '../../interfaces'

export default function ButtonFilter({text, active}: IButtonFilter) {
  return (
    <div 
      className={
        active ? styles.button_filter_active : styles.button_filter
      }
      >{text || 'text'}</div>
  )
}
