import ButtonAppBar from "./components/AppBar";
import ProductListComponent from "./components/ProductListComponent";
import {useState} from "react";


function App() {
    const [productsInCart, setProductsInCart] = useState(0)

    const onAddProductToCart = () => {
        setProductsInCart(productsInCart + 1)
    }
    const onRemoveProductFromCart = () => {
        setProductsInCart(productsInCart - 1)
    }

    return (
    <>
        <ButtonAppBar productsInCart={productsInCart}/>
        <ProductListComponent
            onAddProductToCart={onAddProductToCart}
            onRemoveProductFromCart={onRemoveProductFromCart}
        />
    </>
  );
}

export default App;
