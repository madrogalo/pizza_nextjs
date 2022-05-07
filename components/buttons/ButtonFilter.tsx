import styles from '../../styles/ButtonFilter.module.css'

interface IButtonFilter {
  text?: string,
  active?: boolean
}

export default function ButtonFilter({text, active}: IButtonFilter) {
  return (
    <div 
      className={
        active ? styles.button_filter_active : styles.button_filter
      }
      >{text || 'text'}</div>
  )
}
