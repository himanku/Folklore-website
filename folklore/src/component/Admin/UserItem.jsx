import React from "react";
import { Button, Flex, Td, Text, Tr} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const UserItem = ({ id, name, email, role }) => {
    // const user = useSelector((store) => store.adminUser)
    const navigate = useNavigate();
    //console.log(user);

  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>
        <Button
          colorScheme={role === "blocked"? "red" : "green"}
          size="sm"
        >
          {role === "blocked" ? "Blocked user" : role}
        </Button>
      </Td>
      <Td>
        {/* <Button variant={"ghost"}>
          <Flex color="red" alignItems="center" gap="10px">
            <DeleteIcon />
            <Text fontWeight={600}>DELETE</Text>
          </Flex>
        </Button> */}
        <Button onClick={()=>navigate(`/admin/users/block/${id}`)} colorScheme={"blue"} fontWeight={600}>
          <Flex color="white" alignItems="center" gap="10px">
            <Text>View User Details</Text>
          </Flex>
        </Button>
        
      </Td>
    </Tr>
  );
};

export default UserItem;
