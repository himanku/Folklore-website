import React from 'react'
import { DeleteIcon, EditIcon, StarIcon} from '@chakra-ui/icons'
import { Button, Flex,  Td, Text, Tr, Image } from '@chakra-ui/react'

const ProductItem = ({id, src, name, brand, price, rating}) => {
  return (
        <Tr>
            <Td>{id}</Td>
            <Td w="150px">
                <Image w="100%" src={src} alt="prod-img"/>
            </Td>
            <Td>{name}</Td>
            <Td>{brand}</Td>
            <Td>Rs. {price}</Td>
            <Td>
                <Flex gap="4px" alignItems={"center"}>
                    <Text>{rating}</Text>
                    <StarIcon color="orange"/>
                </Flex>
            </Td>
            <Td>
                <Button variant={"ghost"}>
                    <Flex color="red" alignItems="center" gap="10px">
                        <DeleteIcon/>
                        <Text fontWeight={600}>DELETE</Text>
                    </Flex>
                </Button>
                <Button variant={"ghost"}>
                    <Flex color="green" alignItems="center" gap="10px">
                        <EditIcon/>
                        <Text fontWeight={600}>EDIT</Text>
                    </Flex>
                </Button>
            </Td>
        </Tr>
  )
}

export default ProductItem