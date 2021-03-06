import Image from 'next/image'
import styles from '../../styles/CheckoutButton.module.css'
import { ICheckoutButton } from '../../interfaces'

const CheckoutButton = ({ text, icon, styleButton, onClick }: ICheckoutButton) => {
  return (
    <div 
      onClick={onClick}
      className={ 
      styleButton === 'button_back' ? styles.checkout_button_back
      : styles.checkout_button_pay
    }>
      {icon && <Image src='/images/chervon-left.svg' width={6} height={12} alt='left' />
      }
      <div>&nbsp;&nbsp;{text}</div>
    </div>
  )
}

export default CheckoutButton
