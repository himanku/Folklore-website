import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    Button,
    MenuItemOption,
    MenuOptionGroup,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";

const Sort = ({sort, setSort}) => {

  const onClick = () => {
		if (sort.order === "asc") {
			setSort({ sort: sort.sort, order: "desc" });
		} else {
			setSort({ sort: sort.sort, order: "asc" });
		}
	};

  return (
    <Menu size={{base:"sm", sm:"md"}} closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
        Sort by
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup title="Rating" defaultValue={sort.sort} type="radio">
            <MenuItemOption onClick={onClick} value="asc">Ascending</MenuItemOption>
            <MenuItemOption onClick={onClick} value="desc">Descending</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default Sort;
