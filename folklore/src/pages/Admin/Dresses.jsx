import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure} from '@chakra-ui/react'
import React from 'react'
import { MobileNav } from '../../component/Admin/MobileNav';
import ProductsNavbar from '../../component/Admin/ProductsNavbar';
import SearchSortFilter from '../../component/Admin/SearchSortFilter';
import SidebarContent from '../../component/Admin/SidebarContent';


const Dresses = () => {
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
        <SearchSortFilter/>
        <ProductsNavbar/>
        {/* <RevenueCard/> */}
        {/* <Flex mt="30px" w="100%" justifyContent="space-around" gap="20px" flexDir={{base:"column", md:"row"}} alignItems="center">
          <Image src={bar} w={{base:"90%",md:"50%"}}/>
          <Image src={exp} w={{base:"90%",md:"50%"}}/>
        </Flex> */}

      </Box>
    </Box>
  )
}

export default Dresses