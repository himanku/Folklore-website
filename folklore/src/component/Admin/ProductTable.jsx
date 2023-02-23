import { Table, TableContainer, Tbody, Thead, Tr, Th } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import {useSelector, useDispatch} from "react-redux"
import { getFurniture } from '../../redux/Admin/AdminFurniture/action'

const ProductTable = ({page, search, sort, filterbrand}) => {
    const furnitures = useSelector((store) =>store.furniture.furnitures);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFurniture(page, search,sort, filterbrand))       
    },[ page, search, sort, filterbrand])
  return (
    <div>
        <TableContainer mt="5">
            <Table variant='striped' colorScheme='purple'>
                <Thead>
                <Tr textAlign={"center"}>
                    <Th fontSize="16px">ID</Th>
                    <Th fontSize="16px">IMAGE</Th>
                    <Th fontSize="16px">NAME</Th>
                    <Th fontSize="16px">BRAND</Th>
                    <Th fontSize="16px">PRICE</Th>
                    <Th fontSize="16px">RATING</Th>
                    <Th fontSize="16px">ACTIONS</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {furnitures.sofas?.length>0 && furnitures.sofas.map((el) => (
                        <ProductItem 
                        key={el._id}
                        src={el.img1}
                        name={el.name}
                        id={el.id}
                        brand={el.brand}
                        price={el.highprice}
                        rating={el.rating}    
                    />
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ProductTable