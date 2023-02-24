import React from 'react'
import { DeleteIcon, EditIcon, StarIcon} from '@chakra-ui/icons'
import { Button, Flex,  Td, Text, Tr, Image, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useDisclosure, useToast } from '@chakra-ui/react'

const ProductItem = ({id, src, name, brand, price, rating}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const cancelRef = React.useRef()

    const handleDelete = () => {
        //dispatch(deleteTask(id))
        toast({
            title: "Item Deleted Successfully",
            status: "success",
            duration: 1200,
            isClosable: true,
            position: "top",
          });
        onClose();
    }
  return (
        <Tr>
            <Td w="50px">{id}</Td>
            <Td w="150px">
                <Image w="100%" src={src} alt="prod-img"/>
            </Td>
            <Td>{name}</Td>
            <Td>{brand}</Td>
            <Td>Rs. {price}</Td>
            <Td>
                <Flex gap="4px" alignItems={"center"}>
                    <Text>{rating}</Text>
                    <StarIcon color="orange"/>
                </Flex>
            </Td>
            <Td>
                <Button variant={"ghost"} onClick={onOpen}>
                    <Flex color="red" alignItems="center" gap="10px">
                        <DeleteIcon/>
                        <Text fontWeight={600}>DELETE</Text>
                    </Flex>
                </Button>
                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Delete Item
                        </AlertDialogHeader>

                        <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' ml={3} onClick={handleDelete}>
                            Delete
                        </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
                <Button variant={"ghost"}>
                    <Flex color="green" alignItems="center" gap="10px">
                        <EditIcon/>
                        <Text fontWeight={600}>EDIT</Text>
                    </Flex>
                </Button>
            </Td>
        </Tr>
  )
}

export default ProductItem