import { AddIcon } from '@chakra-ui/icons'
import { Box,
    Button,
    Flex,
    Grid,
    Image,
    Text,
    useColorModeValue,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useToast,
 } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addDress } from '../../redux/Admin/AdminDresses/action'

const initState = {
    name: "",
    img1: "",
    brand: "",
    highprice: ""
  };

const DressCard = ({PRODUCT}) => {
    const dresses = useSelector((store) =>store.dress.dresses);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [add, setAdd] = useState(initState);
    const initialRef = React.useRef(null);
    const toast = useToast();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdd({ ...add, [name]: value });
        console.log(add)
      };

      const handleSubmit = () => {
        const { name, img1, highprice, brand } = add;
        if (!name || !img1 || !highprice || !brand) {
          toast({
            title: "Please fill in all the inputs",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
        } else {
          dispatch(addDress({...add}));
          toast({
            title: "New Item added successfully",
            status: "success",
            duration: 1200,
            isClosable: true,
            position: "top",
          });
          setAdd(initState);
          onClose();
        }
    };
  return (
    <Grid borderBottomWidth="2px" borderBottomColor={useColorModeValue("gray.300", "gray.700")} zIndex={2} bgColor={'gray.100'} p="4" templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)"}} gap="20px">
        <Box bgImage="https://img.freepik.com/premium-photo/green-watercolor-with-white-spots-painted-textured-paper-with-watercolor-paints-different-green-color-background-backdrop-abstract-art-handmade-diy-painting_152932-2783.jpg?w=826" bgSize="100% 100%" p="15px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <Flex>
                <Box>
                    <Text fontSize={{base:"12px", sm:"16px"}} color="white" fontWeight="bold">TOTAL {PRODUCT}</Text>
                    <Text fontSize={{base:"18px", sm:"20px", md:"25px"}} fontWeight="600">{dresses.total}</Text>  
                </Box>
            </Flex>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Link to="/admin/products/dresses">
                    <Text fontSize={{base:"12px", sm:"16px"}} textDecoration="underline" color="white">View all products</Text>
                </Link>
                <Box w={{base:"15%", sm:"20%", lg:"25%"}}>
                    <Image m="auto" src="https://res.cloudinary.com/djo88dwrg/image/upload/v1677070812/Folklore%20assets/search_prod1_cnt143.png" w="80%" /> 
                </Box>
            </Flex>
        </Box>
        <Box bgImage="https://images.ctfassets.net/5de70he6op10/4IFhnhWQZpy0mGYEQeDwyZ/7f5135fc723f65cebb8463a4a2d677b8/Dress_Toppers_Party_Live_Text.jpg?w=630&q=80&fm=jpg&fl=progressive" bgSize="100% 100%" p="15px" boxShadow= "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px">
            <Flex>
                <Box>
                    <Text fontSize={{base:"12px", sm:"16px"}} color="white" fontWeight="bold">TODAY'S SALE</Text>
                    <Text fontSize={{base:"18px", sm:"20px", md:"25px"}} fontWeight="600">{0}</Text>  
                </Box>
            </Flex>
            <Flex justifyContent="space-between" alignItems="flex-end">
                <Link to="/admin/orders">
                    <Text fontSize={{base:"12px", sm:"16px"}} textDecoration="underline" color="white">View all orders</Text>
                </Link>
                <Box w={{base:"15%", sm:"20%", lg:"25%"}}>
                    <Image m="auto" src="https://icon-library.com/images/my-orders-icon/my-orders-icon-22.jpg" w="80%" /> 
                </Box>
            </Flex>
        </Box>
        <Box>

        </Box>
        <Box>
        <Button onClick={onOpen} colorScheme={"orange"} rightIcon={<AddIcon />}>
          ADD NEW {PRODUCT}
        </Button>
        <Modal
          initialFocusRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
          size="sm"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader
              textDecoration="underline"
              color="#257cff"
              fontWeight="bold"
              fontSize="2.5rem"
            >
              <Image src="https://res.cloudinary.com/djo88dwrg/image/upload/v1676995010/folklore-high-resolution-logo-color-on-transparent-background_ctgmwa.png" alt="logo" w="100px" m="auto" />
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>DRESS NAME</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Enter Name"
                  type="name"
                  name="name"
                  onChange={handleChange}
                  value={add.name}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>SET PRICE</FormLabel>
                <Input
                  placeholder="Enter Price"
                  type="number"
                  name="highprice"
                  onChange={handleChange}
                  value={add.highprice}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>ENTER BRAND NAME</FormLabel>
                <Input
                  placeholder="Enter Brand Name"
                  type="text"
                  name="brand"
                  onChange={handleChange}
                  value={add.brand}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>ENTER IMG URL</FormLabel>
                <Input
                  placeholder="Enter Image URL"
                  type="text"
                  name="img1"
                  onChange={handleChange}
                  value={add.img1}
                />
              </FormControl>

            </ModalBody>

            <ModalFooter>
              <Button
                variant="solid"
                ml="3rem"
                //   color="white"
                colorScheme={"green"}
                mr={3}
                onClick={handleSubmit}
              >
                Save
              </Button>
              <Button colorScheme={"red"} onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>
    </Grid>
  )
}

export default DressCard