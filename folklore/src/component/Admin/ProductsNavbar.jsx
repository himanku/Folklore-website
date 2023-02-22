import { Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductsNavbar = () => {
  return (
    <Flex borderTopWidth="2px" borderTopColor={useColorModeValue("gray.200", "gray.700")} justifyContent="space-between" bgColor="white" fontSize={{base:"12px", sm:"14px", md:"16px"}}>
        <NavLink to="/admin/products/furniture">
            <Flex p={{base:"10px",sm:"10px 20px"}}>Furniture</Flex>
        </NavLink>
        <NavLink to="/admin/products/dresses">
            <Flex p={{base:"10px",sm:"10px 20px"}}>Dresses</Flex>  
        </NavLink>
        <Flex p={{base:"10px",sm:"10px 20px"}}>Shoes</Flex>
        <Flex p={{base:"10px",sm:"10px 20px"}}>Clothing</Flex>
        <Flex display={{base:"none", sm:"flex"}} p={{base:"10px",sm:"10px 20px"}}>Wedding</Flex>
        <Flex p={{base:"10px",sm:"10px 20px"}}>Gifts</Flex>
    </Flex>
  )
}

export default ProductsNavbar