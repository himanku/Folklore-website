import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Modal,
  Stack,
  Text,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSinglePageData,
  updateFurniture,
} from "../../redux/Admin/AdminFurniture/action";

const initState = {
  name: "",
  img1: "",
  brand: "",
  highprice: "",
};

const SingleProduct = () => {
  const furniture = useSelector((store) => store.furniture.furniture);
  const [add, setAdd] = useState(initState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const { id } = useParams();
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("furniture", furniture);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdd({ ...add, [name]: value });
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
      dispatch(updateFurniture(id, { ...add }));
      toast({
        title: "New Item added successfully",
        status: "success",
        duration: 1200,
        isClosable: true,
        position: "top",
      });
      setAdd(initState);
      onClose();
      navigate("/admin/products/furniture");
    }
  };

  useEffect(() => {
    dispatch(getSinglePageData(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (furniture) {
      setAdd({ ...furniture });
    }
  }, [furniture]);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      p="2"
    >
      <Image
        maxW={{ base: "40%", sm: "200px" }}
        src={furniture.img1}
        alt={furniture.name}
      />

      <Stack>
        <CardBody>
          <Badge borderRadius="full" px="2" fontSize="lg" colorScheme="teal">
            Folklore
          </Badge>
          <Heading mt="2" size="md">
            {furniture.name}
          </Heading>
          <Text fontSize={"20px"} py="2">
            {furniture.brand}
          </Text>
          <Text py="2" fontSize={"2xl"} color="blue.500">
            Rs. {furniture.highprice}
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="cyan"
            color="white"
            _hover={{
              boxShadow:
                "rgba(1, 136, 255, 0.719) 6px 2px 16px 0px,rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
              transform: "scale(1.2)",
            }}
            onClick={onOpen}
          >
            EDIT
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
                <Image
                  src="https://res.cloudinary.com/djo88dwrg/image/upload/v1676995010/folklore-high-resolution-logo-color-on-transparent-background_ctgmwa.png"
                  alt="logo"
                  w="100px"
                  m="auto"
                />
              </ModalHeader>
              <ModalCloseButton />

              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>UPDATE NAME</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Enter New Name"
                    type="name"
                    name="name"
                    onChange={handleChange}
                    value={add.name || ""}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>UPDATE PRICE</FormLabel>
                  <Input
                    placeholder="Enter Updated Price"
                    type="number"
                    name="highprice"
                    onChange={handleChange}
                    value={add.highprice || ""}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>UPDATE IMG URL</FormLabel>
                  <Input
                    placeholder="Enter New Image URL"
                    type="text"
                    name="img1"
                    onChange={handleChange}
                    value={add.img1 || ""}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>UPDATE BRAND</FormLabel>
                  <Input
                    placeholder="Enter Updated Brand"
                    type="text"
                    name="brand"
                    onChange={handleChange}
                    value={add.brand || ""}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  variant="solid"
                  ml="3rem"
                  colorScheme={"green"}
                  mr={3}
                  onClick={handleSubmit}
                >
                  UPDATE
                </Button>
                <Button colorScheme={"red"} onClick={onClose}>
                  CANCEL
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default SingleProduct;
