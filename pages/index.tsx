import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { IPizza } from '../interfaces'
import Filter from '../components/Filter'
import Title from '../components/Title'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

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
        <div style={{ width: '100%', height: '100px'}} />
      </div>
    </div>
  )
}

export default Home
