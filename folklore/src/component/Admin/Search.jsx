import { SearchIcon } from '@chakra-ui/icons'
import { Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'

const Search = ({setSearch}) => {
  return (
    <Flex gap="20px">
        <Input 
            type="text"
            onChange={(e)=>setSearch(e.target.value)}
            placeholder='Search'/>
        <Button colorScheme="green" rightIcon={<SearchIcon/>}></Button>
    </Flex>
  )
}

export default Search