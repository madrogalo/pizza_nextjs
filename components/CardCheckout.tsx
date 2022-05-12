import React from 'react'
import { delleteFromCheckout } from '../actions/delleteFromCheckout.actions'
import { addOnePizzaCheckout } from '../actions/addOnePizzaCheckout.actions'
import { deleteOnePizzaCheckout } from '../actions/deleteOnePizzaCheckout.actions'
import { useDispatch } from 'react-redux'
import styles from '../styles/CardCheckout.module.css'
import Image from 'next/image'

interface ICardCheckout {
  srcImg: string,
  pizzaName: string,
  dough: string,
  size: number,
  price: number,
  id: number,
  quantity: number
}
const CardCheckout = ({ srcImg, pizzaName, dough, size, price, id, quantity }: ICardCheckout) => {

  const dispatch = useDispatch()

  const handleDeletePizza = (id: any) => {
    dispatch(delleteFromCheckout(id))
  }

  const onePizzaPrice = price / quantity

  const handleAddOnePizzaCheckout = (id: any) => {
    dispatch(addOnePizzaCheckout({id, onePizzaPrice}))
  }
  const handleDeleteOnePizzaCheckout = (id: any) => {
    if (quantity > 1) {
      dispatch(deleteOnePizzaCheckout({id, onePizzaPrice}))
    }
  }


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
          style={{ cursor: 'pointer'}}
          onClick={() => handleAddOnePizzaCheckout(id)}
        />
        {quantity}
        <Image
          src='/images/count-minus.svg'
          width={32}
          height={32}
          alt='count-minus'
          style={{ cursor: 'pointer'}}
          onClick={() => handleDeleteOnePizzaCheckout(id)}

        />
      </div>

      <div className={styles.card_description_price}>{price} ₴</div>

      <div
        className={styles.card_description_delete}
        onClick={() => handleDeletePizza(id)}
      >
        <Image
          src='/images/delete-button.svg'
          width={32}
          height={32}
          alt='delete-button'
          style={{ cursor: 'pointer'}}
        />
      </div>
    </div>
  )
}

export default CardCheckout
