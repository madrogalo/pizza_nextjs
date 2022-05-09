import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import styles from '../../styles/Layout.module.css'

interface IPizza {
  length: any,
  id: number,
  srcImg: string,
  pizzaName: string,
  prices: Array<number>,
  dough:  Array<string>,
  sizes: Array<number>,
  isCountPizza: boolean,
  reduce: any
}

export default function GoToCheckoutButton() {

  const router = useRouter()
  const goToCheckout = () => {
    router.push('checkout')
  }

  const checkout = useSelector<any, IPizza>((state) => state.checkout)
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
        {checkout.length}
      </div>
    </div>
  </div>
  )
}
