import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
// let s=0;
const SingleCartProduct = ({data}) => {
    const {id,image,title,price}=data;
    const [quntity,setQuantity]=useState(1)
    const [productPrice,setProductPrice]=useState(price)
    const [subTotal,setSubTotal]=useState(price)
    
    // useEffect(()=>{
    //     setSubTotal((prv)=>prv+price)
    // },[price])
    // console.log(data);
    // s+=data.price
    // console.log(s);

    
    const handelSubtract=(id)=>{
        if(id){
            setQuantity(prev=>prev-1)
            setProductPrice(price*(quntity-1))
        }
    }

    const handelAddition=(id)=>{
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
    // useEffect(()=>{

    // },[quntity])
    // const id=data.id;
  return (
    <Box>
        <Box >
            <Image style={{width:"200px"}} src={image}/>
            <Text>{productPrice}</Text>
            <Text>{title}</Text>
        </Box>
        <Box>
            {
                quntity>1 ? <Button onClick={()=>handelSubtract(id)}>-</Button> : <button disabled onClick={()=>handelSubtract(id)}>-</button>
            }
            
            <Text>{quntity}</Text>
            <Button  onClick={()=>handelAddition(id)}>+</Button>
        </Box>
        <Box>
            <Button onClick={()=>handelDelteProduct(id)}>REMOVE</Button>
        </Box>
    </Box>
  )
}

export default SingleCartProduct;