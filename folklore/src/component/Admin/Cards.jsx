import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <Grid templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}} gap="20px">
        <Box bgImage="https://img.freepik.com/premium-photo/green-watercolor-with-white-spots-painted-textured-paper-with-watercolor-paints-different-green-color-background-backdrop-abstract-art-handmade-diy-painting_152932-2783.jpg?w=826" bgSize="100% 100%" p="15px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <Flex>
                <Box>
                    <Text fontSize={{base:"12px", sm:"16px"}} color="white" fontWeight="bold">ACTIVE USERS</Text>
                    <Text fontSize={{base:"18px", sm:"20px", md:"25px"}} fontWeight="600">{0}</Text>  
                </Box>
            </Flex>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Link to="/admin/users">
                    <Text fontSize={{base:"12px", sm:"16px"}} textDecoration="underline" color="white">View all users</Text>
                </Link>
                <Box w={{base:"15%", sm:"20%", lg:"25%"}}>
                    <Image m="auto" src="https://icon-library.com/images/users-icon/users-icon-10.jpg" w="80%" /> 
                </Box>
            </Flex>
        </Box>
        <Box bgImage="https://images.ctfassets.net/5de70he6op10/558fy5SfamJIIkBQa3MARu/46185b890b51825214d5f74c4fbc9e8e/Fall_Site_Topper_2_LS.jpg?w=630&q=80&fm=webp" bgSize="100% 100%" p="15px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <Flex>
                <Box>
                    <Text fontSize={{base:"12px", sm:"16px"}} color="white" fontWeight="bold">TODAY'S ORDERS</Text>
                    <Text fontSize={{base:"18px", sm:"20px", md:"25px"}} fontWeight="600">{0}</Text>  
                </Box>
            </Flex>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Link to="/admin/orders">
                    <Text fontSize={{base:"12px", sm:"16px"}} textDecoration="underline" color="white">View all orders</Text>
                </Link>
                <Box w={{base:"15%", sm:"20%", lg:"25%"}}>
                    <Image m="auto" src="https://icon-library.com/images/my-orders-icon/my-orders-icon-22.jpg" w="80%" /> 
                </Box>
            </Flex>
        </Box>
        <Box bgImage="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFHw-JWjGtP9-IGfs1rpkUUl7E670rNC5bTfFSHdzFHM0xsD16" bgSize="100% 100%" p="15px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <Flex>
                <Box>
                    <Text fontSize={{base:"12px", sm:"16px"}} color="white" fontWeight="bold">TODAY'S EARNINGS</Text>
                    <Text fontSize={{base:"18px", sm:"20px", md:"25px"}} fontWeight="600">Rs. {0}</Text>  
                </Box>
            </Flex>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Text fontSize={{base:"12px", sm:"16px"}} textDecoration="underline" color="white">View net revenue</Text>
                <Box w={{base:"15%", sm:"20%", lg:"25%"}}>
                    <Image m="auto" src="https://www.svgrepo.com/download/223766/profits-dollar.svg" w="80%" /> 
                </Box>
            </Flex>
        </Box>
        <Box bgImage="https://images.ctfassets.net/5de70he6op10/4IFhnhWQZpy0mGYEQeDwyZ/7f5135fc723f65cebb8463a4a2d677b8/Dress_Toppers_Party_Live_Text.jpg?w=630&q=80&fm=jpg&fl=progressive" bgSize="100% 100%"  p="15px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <Flex>
                <Box>
                    <Text fontSize={{base:"12px", sm:"16px"}} color="white" fontWeight="bold">GROWTH RATE</Text>
                    <Text fontSize={{base:"18px", sm:"20px", md:"25px"}} fontWeight="600">5.06%</Text>  
                </Box>
            </Flex>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Text fontSize={{base:"12px", sm:"16px"}} textDecoration="underline" color="white">Compare week</Text>
                <Box w={{base:"15%", sm:"20%", lg:"25%"}}>
                    <Image m="auto" src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677064788/Folklore%20assets/pngwing.com_rdujw8.png" w="80%" /> 
                </Box>
            </Flex>
        </Box>
    </Grid>
  )
}

export default Cards