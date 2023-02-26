import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getItem } from "../utility/localStorage";

const PrivateRoute = ({ children }) => {
 
  const toast = useToast();
  let user=getItem("userData")
  console.log(user)
  
  if(user.token==null){
    toast({
      title: "please login ",
      description: "",
      status: "error",
      duration: 1000,
      isClosable: true,
      backgroundColor:"red"
    })
  }
 
  if (user.token!=null) {
    return children;
  }
  return <Navigate to={"/"} replace /> ;
};

export default PrivateRoute;