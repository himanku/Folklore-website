import { Box, Button, Checkbox, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react'

const Filter = () => {
  return (
    <Box >
        <Menu size={{base:"sm", sm:"md"}}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                Filter by Brand
            </MenuButton>
            <MenuList p="4">
                <Box  p="1">
                    <Checkbox
                    name="CasaCraft"
                    // checked={equipment.includes("Barbell")}
                    value="CasaCraft"
                    // onChange={handleChangeBrands}
                    >CasaCraft</Checkbox>
                </Box>
                <Box p="1">
                    <Checkbox
                    name="Woodsworth"
                    // checked={equipment.includes("Barbell")}
                    value="Woodsworth"
                    // onChange={handleChangeBrands}
                    >Woodsworth</Checkbox>
                </Box>
                <Box p="1">
                    <Checkbox
                    name="Febonic"
                    // checked={equipment.includes("Barbell")}
                    value="Febonic"
                    // onChange={handleChangeBrands}
                    >Febonic</Checkbox>
                </Box>
                <Box p="1">
                    <Checkbox
                    name="Durian"
                    // checked={equipment.includes("Barbell")}
                    value="Durian"
                    // onChange={handleChangeBrands}
                    >Durian</Checkbox>
                </Box>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default Filter