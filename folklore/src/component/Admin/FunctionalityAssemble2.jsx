import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductsNavbar from './ProductsNavbar'
import SearchSortFilter2 from './SearchSortFilter2'

const FunctionalityAssemble2 = ({ setSearch, sort, setSort, setFilterbrand, filterbrand}) => {
  return (
    <Box zIndex={2} position="sticky" top="0">
        <SearchSortFilter2 setSearch={setSearch} sort={sort} setSort={setSort} filterbrand={filterbrand} setFilterbrand={setFilterbrand}/>
        <ProductsNavbar/>
    </Box>
  )
}

export default FunctionalityAssemble2