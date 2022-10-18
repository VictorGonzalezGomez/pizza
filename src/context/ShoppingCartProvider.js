import {createContext, useState} from "react"

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider(props) {

  const [shoppingCartItem, setShoppingCartItem] = useState([]);

  const increaseItemAmount = (newItem) => {
    setShoppingCartItem(shoppingCartItem => {
      if (shoppingCartItem.find(item => item.id === newItem.id) == null) {
        return [...shoppingCartItem, {...newItem, quantity: 1}]
      } else {
        return shoppingCartItem.map(item => {
          if (item.id === newItem.id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }
  const decreaseItemAmount = (newItem) => {
    setShoppingCartItem(shoppingCartItem => {
      if (shoppingCartItem.find(item => item.id === newItem.id)?.quantity === 1) {
        return shoppingCartItem.filter(item => item.id !== newItem.id)
      } else {
        return shoppingCartItem.map(item => {
          if (item.id === newItem.id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <ShoppingCartContext.Provider value={{shoppingCartItem, decreaseItemAmount, increaseItemAmount,}}>
      {props.children}
    </ShoppingCartContext.Provider>
  )
}