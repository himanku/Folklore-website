import { Box, Button, Checkbox, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react'

const Filter = ({filterbrand, setFilterbrand}) => {
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
                        name="CasaCraft"
                        // checked={equipment.includes("Barbell")}
                        //checked={"CasaCraft"}
                        value="CasaCraft"
                        onChange={onChange}
                    >CasaCraft</Checkbox>
                </Box>
                <Box p="1">
                    <Checkbox
                    name="Woodsworth"
                    // checked={equipment.includes("Barbell")}
                    value="Woodsworth"
                    onChange={onChange}
                    >Woodsworth</Checkbox>
                </Box>
                <Box p="1">
                    <Checkbox
                    name="Febonic"
                    // checked={equipment.includes("Barbell")}
                    value="Febonic"
                    onChange={onChange}
                    >Febonic</Checkbox>
                </Box>
                <Box p="1">
                    <Checkbox
                    name="Durian"
                    // checked={equipment.includes("Barbell")}
                    value="Durian"
                    onChange={onChange}
                    >Durian</Checkbox>
                </Box>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default Filter