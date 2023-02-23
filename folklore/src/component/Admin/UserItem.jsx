import React from 'react'
import { DeleteIcon, EditIcon} from '@chakra-ui/icons'
import { Button, Flex, Td, Text, Tr } from '@chakra-ui/react'

const UserItem = ({id, name, email, status}) => {
  return (
    <Tr>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td>{email}</Td>
        <Td>
            <Button colorScheme={status==="Online"? "green": "yellow"} size="sm">{status}</Button>
        </Td>
        <Td>
            <Button variant={"ghost"}>
                <Flex color="red" alignItems="center" gap="10px">
                    <DeleteIcon/>
                    <Text fontWeight={600}>DELETE</Text>
                </Flex>
            </Button>
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

export default UserItem