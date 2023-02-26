import { Table, TableContainer, Tbody, Thead, Tr, Th } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/Admin/AdminUserManagement/action'
import UserItem from './UserItem'

const UserTable = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) =>store.adminUser.users)
    
    useEffect(() => {
        dispatch(getUsers())
    },[dispatch]);
  return (
    <div>
        <TableContainer>
            <Table variant='striped' colorScheme='purple'>
                <Thead>
                <Tr textAlign={"center"}>
                    <Th fontSize="16px">ID</Th>
                    <Th fontSize="16px">USER</Th>
                    <Th fontSize="16px">EMAIL</Th>
                    <Th fontSize="16px">ROLE</Th>
                    <Th fontSize="16px">USER DETAILS</Th>
                </Tr>
                </Thead>
                <Tbody>
                {users.length>0 && users.map((el) => (
                    <UserItem
                        key={el._id}
                        id={el._id} 
                        name={`${el.first_name} ${el.last_name}`}
                        email={el.email} 
                        role={el.role}
                    />
                ))}
                </Tbody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default UserTable