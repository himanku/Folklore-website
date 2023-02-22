import { Box, CloseButton, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FiHome, FiPackage, FiUsers } from 'react-icons/fi';
import {IoShirtOutline} from "react-icons/io5"
import { NavItem } from './NavItem';
import { Link } from 'react-router-dom';

const LinkItems = [
    { name: 'Dashboard', icon: FiHome, route: 'admin/dashboard' },
    { name: 'All Products', icon: IoShirtOutline, route: 'admin/products/furniture' },
    { name: 'Users', icon: FiUsers, route: 'admin/users' },
    { name: 'Orders', icon: FiPackage, route: 'admin/orders' },
  ];

const SidebarContent = ({onClose, ...rest}) => {
  return (
    <Box
      transition="1s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link to="/"><Image src="https://res.cloudinary.com/djo88dwrg/image/upload/v1676995010/folklore-high-resolution-logo-color-on-transparent-background_ctgmwa.png" alt="logo" w={{base:"50%", sm:"25%", md: "70%" }}/></Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} route={link.route}>
          {link.name}
        </NavItem>
      ))}
      {/* <NavItem icon={FiLogOut} route={"home"} color="red">Logout</NavItem> */}
    </Box>
  )
}

export default SidebarContent