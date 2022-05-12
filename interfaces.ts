export interface ICard {
  id: number | string;
  srcImg: string;
  pizzaName: string;
  dough: Array<string>;
  sizes: Array<number>;
  prices: Array<number>;
  isCountPizza?: boolean;
  quantity?: number, 
}

export interface ICardCheckout {
  srcImg: string,
  pizzaName: string,
  dough: string,
  size: number,
  price: number,
  id: number | string,
  quantity: number
}

export interface ITitle {
  text?: string
}

export interface IButtonFilter {
  text?: string,
  active?: boolean
}

export interface IPizza {
  length?: any,
  id: number | string,
  srcImg: string,
  pizzaName: string,
  prices: Array<number>,
  dough:  Array<string>,
  sizes: Array<number>,
  isCountPizza: boolean,
  reduce?: any
}

export interface ICheckoutButton {
  text: string,
  icon?: boolean,
  styleButton: 'button_back' | 'button_pay',
  onClick: any
}

export interface IPizzaCheckout {
  map(arg0: (item: IPizzaCheckout) => JSX.Element): React.ReactNode
  length: any,
  id: number | string,
  srcImg: string,
  pizzaName: string,
  price: number,
  dough:  string,
  size: number,
  isCountPizza: boolean,
  reduce: any,
  quantity?: number
}

export interface ILayout {
  children: JSX.Element
}
