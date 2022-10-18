
import "bootstrap/dist/css/bootstrap.min.css";
import ProductProvider from "./context/ProductProvider";
import PageContainer from "./components/PageContainer";
import {ShoppingCartProvider} from "./context/ShoppingCartProvider";

function App() {
  return (
    <ProductProvider>
      <ShoppingCartProvider>
        <PageContainer/>
      </ShoppingCartProvider>
    </ProductProvider>
  );
}

export default App;
