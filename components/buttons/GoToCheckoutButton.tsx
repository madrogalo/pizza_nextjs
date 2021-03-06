import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { IPizza } from '../../interfaces'
import styles from '../../styles/Layout.module.css'

export default function GoToCheckoutButton() {
  const router = useRouter()
  const goToCheckout = () => {
    router.push('checkout')
  }

  const checkout = useSelector<any, IPizza>((state) => state.checkout)
  const quantityPizza = checkout.reduce((acc: number, currentValue: { quantity: number }) => acc + currentValue.quantity, 0)
  const sum = checkout.reduce((acc: number, currentValue: { price: number }) => acc + currentValue.price, 0)
  
  return (
    <div 
    className={styles.header_buy_button} 
    onClick={goToCheckout}
  >
    <div className={styles.header_buy_button_left}>
      {sum} ₴
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
        {quantityPizza}
      </div>
    </div>
  </div>
  )
}
