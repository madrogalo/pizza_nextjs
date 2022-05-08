import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import Filter from '../components/Filter'
import Title from '../components/Title'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

interface IPizza {
  id: number,
  srcImg: string,
  pizzaName: string,
  prices: Array<number>,
  dough:  Array<string>,
  sizes: Array<number>,
  isCountPizza: boolean
}

const Home: NextPage = () => {

  const pizza = useSelector<any, Array<IPizza>>((state) => state.pizza)

  return (
    <div>
      <Filter />
      <div className={styles.containerHome}>
        <Title text='Всі піци' />
        <div className={styles.listGoods}>
          {
            pizza.map(item => (
              <Card
                key={item.id}
                id={item.id}
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
