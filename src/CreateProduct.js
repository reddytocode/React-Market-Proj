import {Box, Button, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from 'axios'
import {prodUrl} from "./utils/constants";
import {useState} from "react";


const CreateProduct = () =>{
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const onCreate  = () =>{
        axios.post(prodUrl, {
            name: "testProduct",
            price: 100,
            quantity: 201
        }).then(response => {
            console.log("response creation", response.data)
        })
    }

    return <Box pt={5} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography mt={1}>Create product</Typography>


        <TextField  id="name" label="Name" variant="outlined" />
        <TextField  id="price" label="Price" variant="outlined" type="number"/>
        <TextField  id="quantity" label="Quantity" variant="outlined" type="number"/>

        <Button onClick={onCreate}>Create</Button>
    </Box>
}

export default CreateProduct