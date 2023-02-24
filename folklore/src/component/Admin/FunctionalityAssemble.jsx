import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductsNavbar from './ProductsNavbar'
import SearchSortFilter from './SearchSortFilter'

const FunctionalityAssemble = ({ setSearch, sort, setSort, setFilterbrand, filterbrand}) => {
  return (
    <Box zIndex={2} position="sticky" top="0">
        <SearchSortFilter setSearch={setSearch} sort={sort} setSort={setSort} filterbrand={filterbrand} setFilterbrand={setFilterbrand}/>
        <ProductsNavbar/>
    </Box>
  )
}

export default FunctionalityAssemble