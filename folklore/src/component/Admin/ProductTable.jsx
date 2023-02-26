import { Table, TableContainer, Tbody, Thead, Tr, Th, Stack, Skeleton, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import {useSelector, useDispatch} from "react-redux"
import { getFurniture } from '../../redux/Admin/AdminFurniture/action'

const ProductTable = ({page, search, sort, filterbrand}) => {
    const furnitures = useSelector((store) =>store.furniture.furnitures);
    const loading = useSelector((store) =>store.furniture.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFurniture(page, search,sort, filterbrand))       
    },[ dispatch, page, search, sort, filterbrand])
    console.log(furnitures)

    if(loading) {
        return (
            <>
                <Stack>
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                    <Skeleton height='50px' />
                </Stack>
            </>
        )
    }
    if(furnitures.sofas?.length===0) {
        return (
            <Image m="auto" mt="50px" src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677246154/Folklore%20assets/no-results_nmyrsm.png" alt="no-data"/>
        )
    }
  return (
    <div>
        <TableContainer mt="5">
            <Table variant='striped' colorScheme='purple'>
                <Thead>
                <Tr textAlign={"center"}>
                    {/* <Th w="50px" fontSize="16px">ID</Th> */}
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
                        id={el._id}
                        brand={el.brand}
                        price={el.highprice}
                        rating={el.rating? el.rating : "No reviews"}    
                    />
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ProductTable