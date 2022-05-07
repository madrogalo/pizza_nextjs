import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Layout.module.css'

export default function GoToCheckoutButton() {

  const router = useRouter()
  const goToCheckout = () => {
    router.push('checkout')
  }

  return (
    <div 
    className={styles.header_buy_button} 
    onClick={goToCheckout}
  >
    <div className={styles.header_buy_button_left}>
      520 ₴
      </div>
    <div className={styles.header_buy_button_center} />
    <div className={styles.header_buy_button_right}>
      <Image 
        height={16} 
        width={16} 
        src='/images/cart.svg' 
        alt="cart" 
      />
      <div className={styles.header_buy_button_quantity}>
        3
      </div>
    </div>
  </div>
  )
}
