import {createContext, useEffect, useState} from "react"

export const ProductContext = createContext({})

export default function ProductProvider(props) {

  const [pizzas, setPizzas] = useState([])
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
         const response = await fetch('./pizzas.json');
        if (response.status === 200) {
          const data = await response.json();
          setPizzas(data);
        } else {
          throw Error({foo: 'Error fetching pizzas list'});
        }
      } catch (error) {
        setIsError(true)
      }
    }
      fetchData();
  }, [])

  return (
    <div>
      {isError ? <h3> Error 404 </h3> :
        <ProductContext.Provider  value={pizzas}>
          {props.children}
        </ProductContext.Provider>
      }
    </div>
  )
}