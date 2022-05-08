import React from 'react'
import styles from '../styles/CardCheckout.module.css'
import Image from 'next/image'

interface ICardCheckout {
  srcImg: string,
  pizzaName: string,
  dough: string,
  size: number,
  price: number,
}
const CardCheckout = ({ srcImg, pizzaName, dough, size, price }: ICardCheckout) => {
  return (
    <div className={styles.card_checkout}>

      <div className={styles.card_description}>
        <Image
          src={srcImg}
          width={80}
          height={80}
          alt='cheese-chicken-pizza'
        />
        <div className={styles.card_description_block}>
          <div className={styles.card_description_name}>
            {pizzaName}
          </div>
          <div className={styles.card_description_goods_yard}>
            {dough}, {size} см.
          </div>

        </div>
      </div>

      <div className={styles.card_description_quantity}>
        <Image
          src='/images/count-plus.svg'
          width={32}
          height={32}
          alt='count-plus'
        />
        5
        <Image
          src='/images/count-minus.svg'
          width={32}
          height={32}
          alt='count-minus'
        />
      </div>

      <div className={styles.card_description_price}>{price} ₴</div>

      <div className={styles.card_description_delete}>
        <Image
          src='/images/delete-button.svg'
          width={32}
          height={32}
          alt='delete-button'
        />

      </div>
    </div>
  )
}

export default CardCheckout
