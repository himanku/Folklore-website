import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getItem } from "../utility/localStorage";

const PrivateRouteAdmin = ({ children }) => {
 
  const toast = useToast();
  let user=getItem("userData")
  console.log(user)
  
  if(user.role=="Admin"){
    toast({
      title: "Access are only for Admin",
      description: "",
      status: "error",
      duration: 2000,
      isClosable: true,
      backgroundColor:"red"
    })
  }
 
  if (user.token!=null) {
    return children;
  }
  return <Navigate to={"/"} replace /> ;
};

export default PrivateRouteAdmin;