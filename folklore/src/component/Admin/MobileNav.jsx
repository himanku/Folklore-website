import {
    Box,
    Avatar,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    VStack,
    AvatarBadge,
    Image,
    useToast,
  } from "@chakra-ui/react";
  import { FiChevronDown, FiMenu } from "react-icons/fi";
  import React from "react";
import { useNavigate } from "react-router-dom";
  
  export const MobileNav = ({ onOpen, ...rest }) => {
    const navigate = useNavigate();
    const toast = useToast();

    const handleLogout = () => {
      localStorage.removeItem("token");
      toast({
        title: "Logout Successful",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top",
      })
    navigate("/")
    }
    return (
      <Flex
        zIndex={2}
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="2px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        
        <Image
          src="https://res.cloudinary.com/djo88dwrg/image/upload/v1676995010/folklore-high-resolution-logo-color-on-transparent-background_ctgmwa.png"
          alt="logo"
          w={{ base: "28%", sm: "17%" }}
          display={{ base: "flex", md: "none" }}
        />
     
  
        <HStack spacing={{ base: "0", md: "6" }}>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar size={"sm"}>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">Himanku Gogoi</Text>
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                zIndex="5"
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuDivider />
                <MenuItem color="red" onClick={handleLogout}>
                  Sign out
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };
  