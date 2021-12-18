import {Grid} from "@mui/material";
import ProductComponent from "./ProductComponent";

const ProductListComponent = (props) =>{
    const fake_product = {
        image: "https://m.media-amazon.com/images/I/71E5zB1qbIL._FMwebp__.jpg",
        name: "iPhone 13",
        description: "Lorem ipsum ... "
    }
    const products = [fake_product, fake_product, fake_product, fake_product, fake_product, fake_product]

    const onAddProductToCart = props.onAddProductToCart
    const onRemoveProductFromCart = props.onRemoveProductFromCart

    return <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            products.map((item, index) => {
                return <Grid item xs={2} sm={4} md={4} key={index}>
                    <ProductComponent
                        product={item}
                        onAddProductToCart={onAddProductToCart}
                        onRemoveProductFromCart={onRemoveProductFromCart}
                    />
                </Grid>
            })
        }
    </Grid>
}

export default ProductListComponent