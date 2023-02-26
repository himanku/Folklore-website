import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import DressCard from '../../component/Admin/DressCard';
import DressTable from '../../component/Admin/DressTable';
import FunctionalityAssemble2 from '../../component/Admin/FunctionalityAssemble2';
import { MobileNav } from '../../component/Admin/MobileNav';
import Pagination from '../../component/Admin/Pagination';
import SidebarContent from '../../component/Admin/SidebarContent';


const Dresses = () => {
  const dresses = useSelector((store) =>store.dress.dresses);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState({sort:"rating", order:"desc"});
  const [filterbrand, setFilterbrand] = useState([]);
  const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <SidebarContent 
            onClose={() => onClose}
            display={{ base: 'none', md: 'block' }}/>
        <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>
      <FunctionalityAssemble2 PRODUCT="DRESSES" setSearch={setSearch} sort={sort} setSort={(sort)=>setSort(sort)}
            filterbrand={filterbrand? filterbrand : []}
            setFilterbrand={(brand) => setFilterbrand(brand)}
        /> 
        <DressCard PRODUCT={"DRESS"}/>
        <DressTable page={page} search={search} sort={sort} filterbrand={filterbrand}/>
        <Pagination
          page={page}
          limit={dresses.limit}
          total={dresses.total}
          setPage={(page) => setPage(page)}
        />

      </Box>
    </Box>
  )
}

export default Dresses