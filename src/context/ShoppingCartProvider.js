import {createContext, useState} from "react"

export const ShoppingCartContext = createContext({})
export default function ShoppingCartProvider(props) {
  const [shoppingCartItem, setShoppingCartItem] = useState([]);

  return (
        <ShoppingCartContext.Provider  value={shoppingCartItem}>
          {props.children}
        </ShoppingCartContext.Provider>
  )
}