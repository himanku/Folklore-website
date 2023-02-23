import { Button, Flex, Table, TableContainer, Tbody, Td, Text, Thead, Tr, Th } from '@chakra-ui/react'
import React from 'react'
import UserItem from './UserItem'

const UserTable = () => {
  return (
    <div>
        <TableContainer>
            <Table variant='striped' colorScheme='purple'>
                <Thead>
                <Tr textAlign={"center"}>
                    <Th fontSize="16px">ID</Th>
                    <Th fontSize="16px">USER</Th>
                    <Th fontSize="16px">EMAIL</Th>
                    <Th fontSize="16px">STATUS</Th>
                    <Th fontSize="16px">ACTION</Th>
                </Tr>
                </Thead>
                <Tbody>
                    <UserItem
                        id="1" 
                        name="Himanku" 
                        email="himnakugogoi5@gmail.com" 
                        status="Online"
                    />
                    <UserItem
                        id="2" 
                        name="Himanku" 
                        email="himnakugogoi5@gmail.com" 
                        status="Offline"
                    />
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default UserTable