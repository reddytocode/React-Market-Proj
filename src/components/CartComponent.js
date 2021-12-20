
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from "react-redux";

const CartComponent = (props) => {

    const productsInCart = useSelector(state => state.counter.value)

    return <>
        <ShoppingCartIcon/>
        <h3>{productsInCart}</h3>
    </>
}

export default  CartComponent