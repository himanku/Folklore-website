import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react'

const SingleCartProduct = ({data}) => {
    console.log(data);
  return (
    <Box>
        <Box >
            <Image style={{width:"200px"}} src={data.image}/>
            <Text>{data.price}</Text>
            <Text>{data.title}</Text>
        </Box>
        <Box>
            <Button>-</Button>
            <Text>1</Text>
            <Button>+</Button>
        </Box>
        
    </Box>
  )
}

export default SingleCartProduct;