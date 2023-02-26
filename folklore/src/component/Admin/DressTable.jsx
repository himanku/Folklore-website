import { Table, TableContainer, Tbody, Thead, Tr, Th, Stack, Skeleton, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import {useSelector, useDispatch} from "react-redux"
import { getDress } from '../../redux/Admin/AdminDresses/action'

const DressTable = ({page, search, sort, filterbrand}) => {
    const dresses = useSelector((store) =>store.dress.dresses);
    const loading = useSelector((store) =>store.furniture.isLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDress(page, search, sort, filterbrand))       
    },[dispatch, page, search, sort, filterbrand])

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
    if(dresses.dress?.length===0) {
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
                    <Th fontSize="16px">IMAGE</Th>
                    <Th fontSize="16px">NAME</Th>
                    <Th fontSize="16px">BRAND</Th>
                    <Th fontSize="16px">PRICE</Th>
                    <Th fontSize="16px">RATING</Th>
                    <Th fontSize="16px">ACTIONS</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {dresses.dress?.length>0 && dresses.dress.map((el) => (
                        <ProductItem 
                        key={el._id}
                        src={el.img1}
                        name={el.name}
                        id={el._id.slice(0,9)}
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

export default DressTable