import styles from '../styles/Tittle.module.css'

interface ITitle {
  text?: string
}
const Title = ({text}: ITitle) => {
  return (
    <h1 className={styles.titleH1}>{text || 'title'}</h1>
  )
}

export default Title