import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useState} from "react";

export default function ProductComponent(props) {
    const product = props.product
    const [productIsInCart, setProductIsInCart] = useState(false)
    const onAddProductToCart = props.onAddProductToCart
    const onRemoveProductFromCart = props.onRemoveProductFromCart

    const onAdd = () => {
        setProductIsInCart(true)
        onAddProductToCart()
    }

    const onRemove = () => {
        setProductIsInCart(false)
        onRemoveProductFromCart()
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    productIsInCart ? <Button size="small" color="primary" onClick={onRemove}>
                        Remove from cart
                    </Button> : <Button size="small" variant="contained" onClick={onAdd}>
                        Add to cart
                    </Button>
                }

            </CardActions>
        </Card>
    );
}
