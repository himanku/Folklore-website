import { Box } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import SingleCartProduct from "./SingleCartProduct"

const CartData=()=>{
    const [Data,setData]=useState()
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
    .then(res=>setData(res.data))
    .catch(err=>{
        console.log(err);
    })
},[])
    return <Box> 
                {
                    Data?.map((el)=>{
                       return <SingleCartProduct key={el.id} data={el} />
                    })
                }
           </Box>
    
}

export default CartData
