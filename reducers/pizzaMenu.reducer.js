const initialState = [
  {
    id: '132344',
    srcImg: '/images/pizzas/cheeseburger-pizza.svg',
    pizzaName: 'Чізбургер-піца',
    prices: [120, 160, 190],
    dough: ['тонке', 'традиційне'],
    sizes: [26, 30, 40],
    options: [
      {
        id: '8f7d9df8d8f',
        dough: 'тонке',
        size: 26,
        price: 120
      },
      {
        id: 'f8df8d8fsff',
        dough: 'тонке',
        size: 30,
        price: 160
      },
      {
        id: 'd98fdfdffdd',
        dough: 'тонке',
        size: 40,
        price: 190
      },
      {
        id: '4jijr4ijrd',
        dough: 'традиційне',
        size: 26,
        price: 120
      },
      {
        id: '9fd88fa0f',
        dough: 'традиційне',
        size: 30,
        price: 160
      },
      {
        id: 'f930r9393',
        dough: 'традиційне',
        size: 40,
        price: 190
      },

    ],
    isCountPizza: false,
    quantity: 1,
  },
  {
    id: '44433',
    srcImg: '/images/pizzas/cheese-pizza.svg',
    pizzaName: 'Сирна',
    prices: [140, 180, 210],
    dough: ['тонке', 'традиційне'],
    sizes: [26, 30, 40],
    isCountPizza: false,
    quantity: 1,
  },
  {
    id: '332435',
    srcImg: '/images/pizzas/asian-pizza.svg',
    pizzaName: 'Креветки по-азійськи',
    prices: [110, 130, 160],
    dough: ['тонке', 'традиційне'],
    sizes: [26, 30, 40],
    isCountPizza: false,
    quantity: 1,
  },
  {
    id: '423233',
    srcImg: '/images/pizzas/cheese-chicken-pizza.svg',
    pizzaName: 'Сирне курча',
    prices: [115, 135, 155],
    dough: ['тонке', 'традиційне'],
    sizes: [26, 30, 40],
    isCountPizza: false,
    quantity: 1,
  },
  {
    id: '523333',
    srcImg: '/images/pizzas/cheeseburger-pizza.svg',
    pizzaName: 'Гамбургер-піца',
    prices: [120, 160, 190],
    dough: ['тонке', 'традиційне'],
    sizes: [26, 30, 40],
    isCountPizza: false,
    quantity: 1,
  },
  {
    id: '6233444',
    srcImg: '/images/pizzas/cheese-pizza.svg',
    pizzaName: 'Фруктова',
    prices: [140, 180, 210],
    dough: ['тонке', 'традиційне'],
    sizes: [26, 30, 40],
    isCountPizza: false,
    quantity: 1,
  },
  {
    id: '73232323',
    srcImg: '/images/pizzas/asian-pizza.svg',
    pizzaName: 'Риба по-азійськи',
    prices: [110, 130, 160],
    dough: ['тонке', 'традиційне'],
    sizes: [26, 30, 40],
    isCountPizza: false,
    quantity: 1,
  },
  {
    id: '8323244',
    srcImg: '/images/pizzas/cheese-chicken-pizza.svg',
    pizzaName: 'Овочне курча',
    prices: [115, 135, 155],
    dough: ['тонке', 'традиційне'],
    sizes: [26, 30, 40],
    isCountPizza: false,
    quantity: 1,
  },
]


const pizzaMenu = (state = initialState,  { type, payload } ) => {
  switch(true) {
    default:
      return state
  }
}

export default pizzaMenu