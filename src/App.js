
import "bootstrap/dist/css/bootstrap.min.css";
import ProductProvider from "./context/ProductProvider";
import PageContainer from "./components/PageContainer";
import {ShoppingCartContext} from "./context/ShoppingCartProvider";

function App() {
  return (
    <ProductProvider>

        <PageContainer/>

    </ProductProvider>
  );
}

export default App;
