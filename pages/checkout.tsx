import React from 'react'
import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { useRouter } from 'next/router'


import CardCheckout from '../components/CardCheckout'
import Title from '../components/Title'
import CheckoutButton from '../components/buttons/CheckoutButton'

import styles from '../styles/Checkout.module.css'

const Checkout: NextPage = () => {
  const checkout = useSelector<any>((state) => state.checkout)
  const arr = [
    {
      id: 132344,
      srcImg: '/images/pizzas/cheeseburger-pizza.svg',
      pizzaName: 'Чізбургер-піца',
      prices: [120, 160, 190],
      dough: ['тонке', 'традиційне'],
      sizes: [26, 30, 40],
      isCountPizza: true
    },
    {
      id: 2,
      srcImg: '/images/pizzas/cheese-pizza.svg',
      pizzaName: 'Сирна',
      prices: [140, 180, 210],
      dough: ['тонке', 'традиційне'],
      sizes: [26, 30, 40],
      isCountPizza: false
    },
    {
      id: 332435,
      srcImg: '/images/pizzas/asian-pizza.svg',
      pizzaName: 'Креветки по-азійськи',
      prices: [110, 130, 160],
      dough: ['тонке', 'традиційне'],
      sizes: [26, 30, 40],
      isCountPizza: false
    },
    {
      id: 423233,
      srcImg: '/images/pizzas/cheese-chicken-pizza.svg',
      pizzaName: 'Сирне курча',
      prices: [115, 135, 155],
      dough: ['тонке', 'традиційне'],
      sizes: [26, 30, 40],
      isCountPizza: false
    }
  ]

  const router = useRouter()
  const goToHome = () => {
    router.push('/')
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
          
          <div className={styles.order_header_right}>
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
          checkout.map((item) => (
            <CardCheckout 
              key={item.id}
              srcImg={item.srcImg}
              pizzaName={item.pizzaName} 
              dough={item.dough}
              size={item.size}          
              price={item.price}
            />
          ))
        }
        <div className={styles.order_footer}>
          <div className={styles.order_footer_left}>
            <div className={styles.order_footer_text}>
              Всього піц: <span>3 шт.</span>
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
              Сума замовлення: <span className={styles.orange}>900 ₴</span>
            </div>
            <CheckoutButton 
              styleButton='button_pay'
              text='Оплатити зараз'
              onClick={() => console.log('pay')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout