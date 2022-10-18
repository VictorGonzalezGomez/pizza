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
  const totalPriceCart = () => {
    const totalPrice = shoppingCartItem.reduce((total, cartItem) => {
      const item = shoppingCartItem.find(i => i.id === cartItem.id)
      return total + (item?.price || 0) * cartItem.quantity
    }, 0).toLocaleString("es-CL");
    return totalPrice;
  }
  const removeItem = (newItem) => {
    setShoppingCartItem(currItems => {
      return currItems.filter(item => item.id !== newItem.id)
    })
  }
  return (
    <ShoppingCartContext.Provider value={{shoppingCartItem, decreaseItemAmount, increaseItemAmount, removeItem,totalPriceCart}}>
      {props.children}
    </ShoppingCartContext.Provider>
  )
}