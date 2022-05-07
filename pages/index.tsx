import type { NextPage } from 'next'
import Filter from '../components/Filter'
import Title from '../components/Title'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {

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
    },
    {
      id: 523333,
      srcImg: '/images/pizzas/cheeseburger-pizza.svg',
      pizzaName: 'Чізбургер-піца',
      prices: [120, 160, 190],
      dough: ['тонке', 'традиційне'],
      sizes: [26, 30, 40],
      isCountPizza: false
    },
    {
      id: 6233444,
      srcImg: '/images/pizzas/cheese-pizza.svg',
      pizzaName: 'Сирна',
      prices: [140, 180, 210],
      dough: ['тонке', 'традиційне'],
      sizes: [26, 30, 40],
      isCountPizza: false
    },
    {
      id: 73232323,
      srcImg: '/images/pizzas/asian-pizza.svg',
      pizzaName: 'Креветки по-азійськи',
      prices: [110, 130, 160],
      dough: ['тонке', 'традиційне'],
      sizes: [26, 30, 40],
      isCountPizza: false
    },
    {
      id: 8323244,
      srcImg: '/images/pizzas/cheese-chicken-pizza.svg',
      pizzaName: 'Сирне курча',
      prices: [115, 135, 155],
      dough: ['тонке', 'традиційне'],
      sizes: [26, 30, 40],
      isCountPizza: false
    },
  ]

  return (
    <div>
      <Filter />
      <div className={styles.containerHome}>
        <Title text='Всі піци' />
        <div className={styles.listGoods}>
          {
            arr.map(item => (
              <Card
                key={item.id}
                srcImg={item.srcImg}
                pizzaName={item.pizzaName} 
                dough={item.dough}
                sizes={item.sizes}          
                prices={item.prices}
                isCountPizza={item.isCountPizza}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
