import React from 'react'
import type { NextPage } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { postOrderData } from '../utils'
import { cleareCheckout } from '../actions/cleareCheckout.actions'
import { IPizzaCheckout } from '../interfaces'
import CardCheckout from '../components/CardCheckout'
import Title from '../components/Title'
import CheckoutButton from '../components/buttons/CheckoutButton'

import styles from '../styles/Checkout.module.css'


const Checkout: NextPage = () => {
  const checkout = useSelector<any, IPizzaCheckout>((state) => state.checkout)
  const sum = checkout.reduce((acc: number, currentValue: { price: number }) => acc + currentValue.price, 0)

  const router = useRouter()
  const goToHome = () => {
    router.push('/')
  }

  const dispatch = useDispatch()

  const handleCleareCheckout = () => {
    dispatch(cleareCheckout())
  }

  const handlePay = () => {
    console.log('handle Pay', checkout)
    postOrderData('https://bot-test-blog.herokuapp.com', JSON.stringify(checkout))
    .finally(() => handleCleareCheckout())
  }
  return (
    <div className={styles.content}>
      <div className={styles.order_block}>
        <div className={styles.order_header}>
          <div className={styles.order_header_left}>
            <Image
              height={29} 
              width={29} 
              src='/images/shopping-cart.svg'
              alt='cart'
            />
            <Title text='Кошик' />
          </div>
          
          <div 
            className={styles.order_header_right}
            onClick={handleCleareCheckout}  
          >
            <Image 
                height={20} 
                width={20} 
                src='/images/trash.svg'
                alt='trash'
              />
            Видалити все з кошика
          </div>
        </div>
        {
          checkout.map((item: any) => (
            <CardCheckout 
              key={item.id}
              id={item.id}
              srcImg={item.srcImg}
              pizzaName={item.pizzaName} 
              dough={item.dough}
              size={item.size}          
              price={item.price}
              quantity={item.quantity}
            />
          ))
        }
        <div className={styles.order_footer}>
          <div className={styles.order_footer_left}>
            <div className={styles.order_footer_text}>
              Всього піц: <span>{checkout.length} шт.</span>
            </div>
            <CheckoutButton
                styleButton='button_back'
                text='Повернутися назад'
                icon
                onClick={goToHome}
              />
          </div>
          <div className={styles.order_footer_right}>
            <div className={styles.order_footer_text}>
              Сума замовлення: <span className={styles.orange}>{sum} ₴</span>
            </div>
            <CheckoutButton 
              styleButton='button_pay'
              text='Оплатити зараз'
              onClick={handlePay}
            />
          </div>
        </div>
        <div style={{ width: '100%', height: '100px'}} />
      </div>
    </div>
  )
}

export default Checkout