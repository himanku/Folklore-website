import { SearchIcon } from '@chakra-ui/icons'
import { Box, Grid, Button, Input, Flex } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter'
import Sort from './Sort'

const SearchSortFilter = () => {
  return (
    <Grid p="4" gap="20px" bgColor={"white"} templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(2, 1fr)"}}>
        <Flex gap="30px">
            <Box>
                <Filter/>
            </Box>
            <Box>
                <Sort/>
            </Box>
        </Flex>
        <Flex gap="20px">
            <Input placeholder='Search'/>
            <Button colorScheme="green" rightIcon={<SearchIcon/>}></Button>
        </Flex>
    </Grid>
  )
}

export default SearchSortFilter