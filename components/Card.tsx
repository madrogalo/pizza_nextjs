import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addToCheckout } from '../actions/addToCheckout.actions'

import { ICard } from '../interfaces'
import styles from '../styles/Card.module.css'
import Image from 'next/image'



const Card = ({ srcImg, pizzaName, dough, sizes, prices, isCountPizza, id }: ICard) => {

  const [doughState, setDoughState] = useState(dough[0])
  const [sizeState, setSizeState] = useState(sizes[0])
  const [priceState, setPriceState] = useState(prices[0])

  const handeleDoughState = (e: any) => setDoughState(e.target.innerText)

  const handeleSizeState = (e: any) => {
    setSizeState(+e.target.innerText)
    const getIndexFromSizes = sizes.indexOf(+e.target.innerText);
    setPriceState(prices[getIndexFromSizes])
  }

  const dispatch = useDispatch()

  const handleAddToCard = () => {
    const pizza = {
      id,
      srcImg,
      pizzaName,
      dough: doughState,
      size: sizeState,
      price: priceState,
      quantity: 1
    }
    dispatch(addToCheckout(pizza))
  }

  return (
    <div className={styles.card}>
      <div style={{ marginLeft: '15px'}}>
        <Image
          src={srcImg}
          width={260}
          height={260}
          alt={pizzaName}
        />
      </div>
      <div className={styles.title}>{pizzaName}</div>
      <div className={styles.options}>
        {
          dough.map((item) => {
            if(doughState === item) {
              return(
                <div 
                  key={item} 
                  className={styles.option_button_active}
                  onClick={handeleDoughState}
                >
                  {item}
                </div>
              )
            }
            return(
              <div 
                key={item} 
                className={styles.option_button} 
                onClick={handeleDoughState}
              >
                {item}
              </div>
            )
          })
        }

        {
          sizes.map((size) => {
            if(size === sizeState) {
              return(
                <div 
                  key={size} 
                  className={styles.option_button_size_active}
                  onClick={handeleSizeState}
                >
                  {size}
                </div>
              )
            }
            return(
              <div 
                key={size} 
                className={styles.option_button_size}
                onClick={handeleSizeState}
              >
                {size}
              </div>
            )
          })
        }

      </div>
      <div className={styles.price_and_add}>
        <div className={styles.price}>?????? {priceState} ???</div>
        <div className={styles.add_button} onClick={handleAddToCard}> + ????????????
          {
            isCountPizza && <div className={styles.countPizza}>2</div>
          }
        </div>
      </div>
    </div>
  );
};

export default Card;