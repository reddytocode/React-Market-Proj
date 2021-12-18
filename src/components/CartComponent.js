
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartComponent = (props) => {

    const productsInCart = props.productsInCart

    return <>
        <ShoppingCartIcon/>
        <h3>{productsInCart}</h3>
    </>
}

export default  CartComponent