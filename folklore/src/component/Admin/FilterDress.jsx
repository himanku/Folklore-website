import { Box, Button, Checkbox, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react'

const FilterDress = ({filterbrand, setFilterbrand}) => {
    const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterbrand, input.value];
			setFilterbrand(state);
            
		} else {
			const state = filterbrand.filter((val) => val !== input.value);
			setFilterbrand(state);
		}
	};
  return (
    <Box >
        <Menu size={{base:"sm", sm:"md"}}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                Filter by Brand
            </MenuButton>
            <MenuList p="4">
                <Box  p="1">
                    <Checkbox
                        name="Maxi_Dress"
                        // checked={equipment.includes("Barbell")}
                        //checked={"Maxi_Dress"}
                        value="Maxi_Dress"
                        onChange={onChange}
                    >Maxi Dress</Checkbox>
                </Box>
                <Box p="1">
                    <Checkbox
                    name="Sleeve_Dress"
                    // checked={equipment.includes("Barbell")}
                    value="Sleeve_Dress"
                    onChange={onChange}
                    >Sleeve Dress</Checkbox>
                </Box>
                <Box p="1">
                    <Checkbox
                    name="Mini_Dress"
                    // checked={equipment.includes("Barbell")}
                    value="Mini_Dress"
                    onChange={onChange}
                    >Mini Dress</Checkbox>
                </Box>
                <Box p="1">
                    <Checkbox
                    name="Tunic Dress"
                    // checked={equipment.includes("Barbell")}
                    value="Tunic Dress"
                    onChange={onChange}
                    >Tunic Dress</Checkbox>
                </Box>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default FilterDress
