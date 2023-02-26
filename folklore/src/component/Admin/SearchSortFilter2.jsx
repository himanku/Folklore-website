import { SearchIcon } from '@chakra-ui/icons'
import { Box, Grid, Button, Input, Flex } from '@chakra-ui/react'
import React from 'react'
import FilterDress from './FilterDress'
import Search from './Search'
import Sort from './Sort'

const SearchSortFilter2 = ({setSearch, sort, setSort, setFilterbrand, filterbrand}) => {
  return (
    <Grid p="4" gap="20px" bgColor={"white"} templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(2, 1fr)"}}>
        <Flex gap="30px">
            <Box>
                <FilterDress filterbrand={filterbrand} setFilterbrand={setFilterbrand}/>
            </Box>
            <Box>
                <Sort sort={sort} setSort={setSort}/>
            </Box>
        </Flex>
            <Search setSearch={(search)=>setSearch(search)}/>
    </Grid>
  )
}

export default SearchSortFilter2