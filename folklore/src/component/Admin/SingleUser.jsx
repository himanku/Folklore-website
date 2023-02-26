import React, { useEffect } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSingleUser,
  getUsers,
  UpdateUser,
} from "../../redux/Admin/AdminUserManagement/action";
import { ArrowBackIcon } from "@chakra-ui/icons";

const SingleUserComp = () => {
  const user = useSelector((store) => store.adminUser.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);
  const { id } = useParams();
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);

  const onClick = (user) => {
    let updated_data;
    console.log(user.role);
    if (user.role === "blocked") {
      updated_data = { ...user, role: "user" };
    } else if (user.role === "user" || "admin") {
      updated_data = { ...user, role: "blocked" };
    }
    dispatch(UpdateUser(id, updated_data));
    toast({
      title: "Status Changed",
      status: "success",
      duration: 1200,
      isClosable: true,
      position: "top",
    });
    onClose();
    navigate("/admin/users");
    dispatch(getUsers())
  };

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [id, dispatch]);

  return (
    <>
      <Button onClick={() => navigate("/admin/users")} colorScheme={"blue"}>
        <ArrowBackIcon /> Go Back
      </Button>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        p="2"
      >
        <Image
          maxW={{ base: "40%", sm: "250px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          alt={user.first_name}
        />

        <Stack>
          <CardBody>
            {user.role === "blocked" ? (
              <Badge borderRadius="full" px="2" fontSize="lg" colorScheme="red">
                {user.role}
              </Badge>
            ) : (
              <Badge
                borderRadius="full"
                px="2"
                fontSize="lg"
                colorScheme="teal"
              >
                {user.role}
              </Badge>
            )}
            <Heading mt="2" size="md">
              {`${user.first_name} ${user.last_name}`}
            </Heading>
            <Text fontSize={"20px"} py="2">
              {user.role}
            </Text>
            <Text py="2" fontSize={"2xl"} color="blue.500">
              {user.email}
            </Text>
          </CardBody>

          <CardFooter>
            {user.role === "blocked" ? 
                <Button
                  variant="solid"
                  colorScheme="green"
                  color="white"
                  _hover={{
                    boxShadow:
                      "rgba(1, 136, 255, 0.719) 6px 2px 16px 0px,rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                    transform: "scale(1.2)",
                  }}
                  onClick={onOpen}
                >
                  Click here to unblock user
                </Button>
                
                : 
              
                <Button
                  variant="solid"
                  colorScheme="red"
                  color="white"
                  _hover={{
                    boxShadow:
                      "rgba(1, 136, 255, 0.719) 6px 2px 16px 0px,rgba(255, 255, 255, 0.8) -6px -2px 16px 0px",
                    transform: "scale(1.2)",
                  }}
                  onClick={onOpen}
                >
                  Click here to block user
                </Button>
            }
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        {user.role==="blocked"? "Unblock User" : "Block User"}
                      </AlertDialogHeader>

                      <AlertDialogBody>Are you sure?</AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme= {user.role==="blocked"? "green" : "red"}
                          ml={3}
                          onClick={() => onClick(user)}
                        >
                           {user.role==="blocked"? "Confirm Unblock" : "Confirm Block"}
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default SingleUserComp;
