import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    Button,
    MenuItemOption,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";

const Sort = () => {
  return (
    <Menu size={{base:"sm", sm:"md"}} closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
        Sort by
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup title="Price" type="radio">
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup title="Rating" type="radio">
            <MenuItemOption value="asc">Ascending</MenuItemOption>
            <MenuItemOption value="desc">Descending</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default Sort;
