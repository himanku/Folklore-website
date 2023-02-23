import { Box, Button, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import SingleCartProduct from "./SingleCartProduct"

const CartData=()=>{
    const [Data,setData]=useState();
    const [total,setTotal]=useState(0)

    const [quntity,setQuantity]=useState(1)
    const [productPrice,setProductPrice]=useState(0)
    
    


    let s=0
    useEffect(()=>{
            axios.get("https://fakestoreapi.com/products")
        .then(res=>setData(res.data))
        .catch(err=>{
            console.log(err);
        })
    },[])

    {
        Data?.map((el)=>{
            s+=el.price
        })
    }


    const handelSubtract=(id,price)=>{
        if(id){
            setQuantity(prev=>prev-1)
            setProductPrice(price*(quntity-1))
        }
    }

    const handelAddition=(id,price)=>{
        if(id){
            setQuantity(prev=>prev+1)
            setProductPrice(price*(quntity+1))
         }
    }

    const handelDelteProduct=(id)=>{
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
  
  
//    console.log(Data);
    return <Box> 
                <Box>
                    {
                        Data?.map((el)=>{
                        return <Box key={el.id}>
                        <Box >
                            <Image style={{width:"200px"}} src={el.image}/>
                            <Text>{productPrice===0 ? el.price : productPrice}</Text>
                            <Text>{el.title}</Text>
                        </Box>
                        <Box>
                            {
                                quntity > 1 ? <Button onClick={()=>handelSubtract(el.id,el.price)}>-</Button> : <button disabled onClick={()=>handelSubtract(el.id)}>-</button>
                            }
                            <Text>{quntity}</Text>
                            <Button  onClick={()=>handelAddition(el.id,el.price)}>+</Button>
                        </Box>
                        <Box>
                            <Button onClick={()=>handelDelteProduct(el.id,el.price)}>REMOVE</Button>
                        </Box>
                    </Box>
                        })
                    }
                </Box>
                <Box>{s}</Box>
                {/* <Box>
                    <Heading>Order Summary</Heading>
                    {
                        Data?.map((el)=>{
                            return (
                            <Box key={el.id}>
                                <Box>
                                    <Text>Subtotal</Text>
                                    <Text>${el.price}</Text>
                                </Box>
                                <Box>
                                    <Text></Text>
                                    <Text></Text>
                                </Box>
                                <Box>
                                    <Text></Text>
                                    <Text></Text>
                                </Box>
                                <Box>
                                    <Text></Text>
                                    <Text></Text>
                                </Box> 
                            </Box>
                            )
                        })
                    }
                    
                </Box> */}
           </Box>
    
}

export default CartData
