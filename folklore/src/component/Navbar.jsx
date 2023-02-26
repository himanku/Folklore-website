import React, { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Input,
  Img,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Popover,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  VStack,
  Heading,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner,
  Progress,
  useToast,
} from '@chakra-ui/react';
import {HiLanguage,HiUser} from "react-icons/hi2";
import { BsBag ,BsSearch} from "react-icons/bs";
import logo from '../Assetes/folklore-logo.png'
import MegaMenu from '../pages/MegaMenu';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, setItem } from '../utility/localStorage';
import { Login, Signin } from '../redux/Auth/auth.action';
import { hasAlphaNum, hasSymbol } from '../utility/utilis';


const Navbar = () => {
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [flage,setFlag]=useState(false)
    const [Registarion, setRegistarion] = useState(false);
    const toast = useToast();

    const navigate=useNavigate()

    const user=getItem("userData")||{}

    const newuser=getItem("newuser")||{}

  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
   


    const [LoginEmail, setLoginEmail] = useState('')
    const EnailError = LoginEmail === ''
    const [Loginpassword, setLoginpassword] = useState('')
    const passwordError = Loginpassword === ''



    const [SignininEmail, setsigninEmail] = useState(''||"jithstephen@gmail.com")

    const SignininEmailError = SignininEmail === ''

    const [SignininAge, setsigninAge] = useState(0)

    const SignininAgeError = SignininAge === ''

    const [Signininfirstname, setsigninfirstname] = useState('')

    const SignininfirstnameError = Signininfirstname === ''
    
    const [Signininlastname, setsigninlastname] = useState('')

    const SignininlastnameError = Signininlastname === ''


    const [Signininpassword, setSigninpassword] = useState('')

    const SignininpasswordError = Signininpassword === ''


    const [alphaNum, setalphaNum] = useState(0);
    const [symbolNum, setsymbolNum] = useState(0);
    const [strengthCount, setstrengthCount] = useState(0);

    const { isLoading, isError, userData, isAuth } =useSelector((store) => store.auth);
  const dispatch = useDispatch();


    const HandleSignin=()=>{
         let data={
          "email":LoginEmail,
          "password":Loginpassword
         }
        
         try {
            dispatch(Login(data))
            

         } catch (error) {
          toast({
            title: "invalid username or password ",
            description: "",
            status: "error",
            duration: 6000,
            isClosable: true,
            backgroundColor:"red"
          })
          
         }
       

         setLoginEmail("")
         setLoginpassword("")
    }

    const HandleLogin=()=>{
      
      let data={
        "email":SignininEmail,
        "password":Signininpassword,
        "first_name":Signininfirstname,
        "last_name":Signininlastname,
         "role":"user",
        
       }
       
  dispatch(Signin(data))
 setsigninEmail("")
setsigninfirstname("")
setsigninlastname("")
setsigninAge("")
setSigninpassword("")


    }




    const Logout=()=>{
      setItem("userData",{})
      window.location.reload()
    }
    
    
   
                                                        //  password strength validation
    useEffect(() => {
      let passTemp = 0;
      if (Loginpassword.length > 7) {
        passTemp = 1;
      }
      if (Signininpassword.length > 7) {
        passTemp = 1;
      }
     
      hasAlphaNum.test(Loginpassword) == true ? setalphaNum(1) : setalphaNum(0);
      hasSymbol.test(Loginpassword) == true ? setsymbolNum(1) : setsymbolNum(0);
      let tempCount = ((alphaNum * 30) + (symbolNum * 30) + (passTemp * 40));
      setstrengthCount(tempCount);

      hasAlphaNum.test(Signininpassword) == true ? setalphaNum(1) : setalphaNum(0);
      hasSymbol.test(Signininpassword) == true ? setsymbolNum(1) : setsymbolNum(0);
      let temp2Count = ((alphaNum * 30) + (symbolNum * 30) + (passTemp * 40));
      setstrengthCount(temp2Count);

      if(!isLoading&&user.Loginstatus==200&&user.Message==`${user.name} you are successfully logged in`){
        toast({
          title: "successfully sign in ",
          description: "",
          status: "success",
          duration: 6000,
          isClosable: true,
         
        });
         setItem("userData", {...user,Loginstatus:0});
      }
      if(!isLoading&&user.Message&&!user.role){
        toast({
          title: "please Check Your username or Password",
          description: "",
          status: "error",
          duration: 6000,
          isClosable: true,
          backgroundColor:"red"
         
        });
         setItem("userData", {...user,Loginstatus:0,Message:null});
      }

      if(!isLoading&&newuser.Message&&newuser.Message=="New User Successfully Registered! Please Logged In"){
        toast({
          title: `${newuser.Message}`,
          description: "",
          status: "success",
          duration: 6000,
          isClosable: true,
         
        });
        setItem("newuser", {...newuser,Message:null});
      }
      if(!isLoading&&newuser.Message&&newuser.Message!=null&&newuser.Message!=="New User Successfully Registered! Please Logged In"){
        toast({
          title: `${newuser.Message}`,
          description: "",
          status: "error",
          duration: 6000,
          isClosable: true,
          backgroundColor:"red"
         
        });
         setItem("newuser", {...newuser,Message:null});
      }






    }, [Loginpassword.length,strengthCount,Signininpassword.length,isLoading,user,newuser]);

    

    
 
  return (
   
                                                                       
         <Box bg={useColorModeValue('#fdfdf9', '#fdfdf9')} px={2}  position="sticky" top={0} zIndex={4}>

                                <Flex h={8} alignItems={'end'}  justifyContent={{base: 'center', sm: 'center', md: 'center',lg:'end'}} pr={12} > {/*------------------------------------- top part */}
                                <Flex justifyContent={'space-around'} gap={6} mt={2} alignItems={'center'}  display={{base: 'none', sm: 'none', md: 'none',lg:'flex'}}>
                                <Flex gap={2} alignItems={'center'}  display={{base: 'none', sm: 'none', md: 'none',lg:'flex'}}> 
                                <HiLanguage/> English</Flex>
                                <Flex gap={2} alignItems={'center'}   display={{base: 'none', sm: 'none', md: 'none',lg:'flex'}}> 
                                                            
   {/* ------------------------------------------------------------Logined user Dropdown */}
                                                    { user &&(user.role=="admin"||user.role=="user" ) &&<Menu>
                                                          <MenuButton backgroundColor={"#fdfdf9"} as={Button} rightIcon={<IoChevronDownCircleOutline />}>
                                                            Hi {`${user.name}`}
                                                          </MenuButton>
                                                          <MenuList>
                                                         <MenuItem> Dashboard</MenuItem>
                                                          <MenuItem>Personal Profile</MenuItem>
                                                          <MenuItem>Addresses & Payments</MenuItem>
                                                          <MenuItem>Order History</MenuItem>
                                                          <MenuItem>Wish List</MenuItem>
                                                         { user&&user.role=="admin" && <MenuItem onClick={()=>navigate("/admin/products/furniture")}>Admin Page</MenuItem>}
                                                          <MenuItem onClick={Logout}>Sign Out</MenuItem>
                                                            
                                                          </MenuList>
                                                        </Menu> }

{/* 
      --------------------------------------------------------------------------Authentication pop over */}
                                                            {!user.role && <Popover   >
                                                                <PopoverTrigger >
                                                                  <Button _hover={{backgroundColor:"#fdfdf9"}} backgroundColor={"#fdfdf9"}><HiUser/>Sign in / sign up</Button>
                                                                </PopoverTrigger>
                                                                {!Registarion?(<PopoverContent zIndex={4} boxShadow="0 0 10px rgba(0, 0, 0, 0.2)" 
                                                                borderRadius="4px" h={"650px"} w={"500px"} mr={"500px"} p={6}>
                                                                  <PopoverArrow />
                                                                  <PopoverCloseButton />
                                                                  <PopoverHeader ><Flex w={"100%"} justifyContent={"center"}>   
   {/* --------------------------------------------------Initial Popup  Login */}
                                                                    <Text  fontSize={"40px"}>Sign In</Text> </Flex></PopoverHeader>
                                                                  <PopoverBody textAlign={"center"}> <Text>Sign in so you can save items to your wishlists, track your orders, and check out faster!</Text>
                                                                  <FormControl isInvalid={(EnailError,passwordError)}>
                                                                            
                                                                            <Input type='email' placeholder='Email...' value={LoginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                                                                            {!EnailError ? (
                                                                              <FormHelperText>
                                                                                Enter the email you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>Email is required.</FormErrorMessage>
                                                                            )}
                                                                             <Input type='password' placeholder='password...' value={Loginpassword}
                                                                              onChange={(e) => setLoginpassword(e.target.value)} />
                                                                              

                                                                              
                                                                            {!passwordError ? (
                                                                              <FormHelperText>
                                                                                Enter the password you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>password is required.</FormErrorMessage>
                                                                            )}
                                                                            <Button bgColor={"#4b5666"} border={0}  w={"100%"} onClick={()=>HandleSignin()} color={"white"} >{isLoading? <Spinner />:"Sign in"}</Button>
                                                                          </FormControl>

                                                                  </PopoverBody>
                                                                  <VStack gap={3}>
                                                                  <PopoverHeader ><Flex w={"100%"} justifyContent={"center"}>
                                                                    
                                                                    <Text  fontSize={"40px"}>Sign Up</Text> </Flex></PopoverHeader>
                                                                    <PopoverBody gap={6} textAlign={"center"}> <Text color={"white"}>Welcome! It's quick and easy to set up an account</Text>
                                                                     <Text>Welcome! It's quick and easy to set up an account</Text>
                                                                     <Button  onClick={()=>{setRegistarion(!Registarion)}} bgColor={"#4b5666"} color={"white"}  >Create An Account</Button>
 
                                                                  </PopoverBody></VStack>
                                                                </PopoverContent>):(<PopoverContent textAlign={"center"} zIndex={4} boxShadow="0 0 10px rgba(0, 0, 0, 0.2)" 
                                                                borderRadius="4px" h={"650px"} w={"500px"} mr={"500px"} p={6}>
                                                                  <PopoverArrow />
                                                                  <PopoverCloseButton />
                                                                  <PopoverHeader ><Flex w={"100%"} justifyContent={"center"}>
  {/* --------------------------------------------------------------------Sigin up form */}
                                                                    <Text  fontSize={"40px"}>Sign Up</Text> </Flex></PopoverHeader>
                                                                  <PopoverBody  textAlign={"center"}> 
                                                                  <FormControl isInvalid={( SignininEmailError,SignininfirstnameError,SignininpasswordError)} >
                                                                    < VStack gap={2}>
                                                                            
                                                                            <Input  type='email' placeholder='Email...' value={SignininEmail} border={"1px solid black"} onChange={(e) => setsigninEmail(e.target.value)} />
                                                                            {!SignininEmailError ? (
                                                                              <FormHelperText >
                                                                                Enter the email you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>Email is required.</FormErrorMessage>
                                                                            )}
                                                                             <Input type='text' placeholder='Firstname' value={Signininfirstname} onChange={(e) => setsigninfirstname(e.target.value)} />
                                                                            {!SignininfirstnameError ? (
                                                                              <FormHelperText>
                                                                                Enter the Firstname you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>Firstname is required.</FormErrorMessage>
                                                                            )}
                                                                             <Input type='text' placeholder='lastname' value={Signininlastname} onChange={(e) => setsigninlastname(e.target.value)} />
                                                                            {!EnailError ? (
                                                                              <FormHelperText>
                                                                                Enter the lastname you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>lastname is required.</FormErrorMessage>
                                                                            )}
                                                                             
                                                                             <Input type='password' placeholder='password...' value={Signininpassword}
                                                                              onChange={(e) => setSigninpassword(e.target.value)} />

                                                                          <Flex flexDirection="column" width="100%" my="1em">
                                                                                        <Flex width="100%" justify="space-between">
                                                                                          <Text fontSize="xs">Password strength</Text>
                                                                                          <Text fontSize="xs" as="b">
                                                                                            {strengthCount}
                                                                                          </Text>
                                                                                        </Flex>
                                                                                        <Progress
                                                                                          width="100%"
                                                                                          value={strengthCount}
                                                                                          size="sm"
                                                                                          colorScheme={(strengthCount >= 0 && strengthCount < 30)? "red":(strengthCount >= 30 && strengthCount <= 70)? "yellow": (strengthCount > 70 && strengthCount <= 100)? "green": null
                                                                                          }
                                                                                        />
                                                                                      </Flex>
                                                                            {!SignininpasswordError ? (
                                                                              <FormHelperText>
                                                                                Enter the password you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>password is required.</FormErrorMessage>
                                                                            )}
                                                                            <Button bgColor={"#4b5666"} border={0} w={"100%"} onClick={()=>HandleLogin()} color={"white"} >{isLoading? <Spinner />:"Sign UP"}</Button>
                                                                         </VStack> </FormControl>

                                                                  </PopoverBody>
                                                                
                                                                   <Text _hover={{cursor: "pointer"}} onClick={()=>{setRegistarion(!Registarion)}}>Already have an  an account</Text>
                                                                </PopoverContent>)}
                                                              </Popover> }
                                                       </Flex>
                                                    </Flex>
                                                   <Box onClick={()=>navigate("/")} display={{base: 'flex', sm: 'flex', md: 'none',lg:'none'}}  h={"100%"}><Img src={logo} h={"100%"}/></Box>
                                             </Flex>

     {/*-------------------------- middile part----------------------------------------- */}
                                        <Flex h={16} alignItems={'center'}  justifyContent={{base:"space-evenly",md:'space-between'}} pr={{base: 0, sm: 0, md:2,lg:2}} pl={{base: 2, sm: 2, md:8,lg:8}} borderBottom={".5px solid RGBA(0, 0, 0, 0.24)"}>
                                        <Box display={{base: 'none', sm: 'none', md: 'flex',lg:'flex'}}  h={"100%"}><Img onClick={()=>navigate("/")} src={logo} h={"80%"}/></Box>

                                        <Flex w={{base:"90%" ,sm:"90%",md:"30%"}} alignItems={'center'} justifyContent={{base:"space-around",sm:"space-around"}}  >
                                            <Flex border={"1px solid RGBA(0, 0, 0, 0.24)"} borderRadius={10} w={{base:"100%" ,sm:"100%"}} p={1}> <Input w={{base:"80%" ,sm:"80%"}} border={"0px"}/><Button backgroundColor={"#fdfdf9"}><BsSearch/></Button></Flex>
                                            <Button onClick={()=>navigate("/cartpage")} backgroundColor={"#fdfdf9"}><BsBag/></Button>
                                            <Button display={{base: 'flex', sm: 'flex', md: 'flex',lg:'none'}} backgroundColor={"#fdfdf9"} h={"50px"} w={"50px"}
                                            onClick={() => handleClick("md")}
                                            
                                            
                                            > <GiHamburgerMenu /> </Button>

  {/* -----------------------------------------------------------Small Screen Button Abd Drop Down */}
                                              <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
                                                    <DrawerOverlay />
                                                    <DrawerContent>
                                                    <DrawerCloseButton />
                                                    <DrawerHeader>
                                                      

                                                    {  !user.role && <Box  borderBottom={"1px solid black"} w={"100%"} h={16}  onClick={()=>{setFlag(!flage)}}>
                                                           Sign In /Sign up
                                                        </Box>}
                                                       
                                                      { flage &&<Modal  isOpen={onClose} onClose={isOpen} size={"full"}>
                                                            <ModalOverlay />
                                                            <ModalContent>
                                                          
                                                            <ModalCloseButton  onClick={()=>{setFlag(!flage)
                                                                    onClose()}} />
                                                            <ModalBody>
                                                            {!Registarion?(<>
                                                                 
                                                                  <Heading ><Flex w={"100%"} justifyContent={"center"}>
                                                                    <Text  fontSize={"40px"}>Sign In</Text> </Flex></Heading>          
  {/* ------------------------------------------------------------Sign in in Small screen----------------------------------------------------------------------------- */}
                                                                  <Stack textAlign={"center"}> <Text>Sign in so you can save items to your wishlists, track your orders, and check out faster!</Text>
                                                                  <FormControl isInvalid={(EnailError,passwordError)}>
                                                                            
                                                                            <Input type='email' placeholder='Email...' value={LoginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                                                                            {!EnailError ? (
                                                                              <FormHelperText>
                                                                                Enter the email you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>Email is required.</FormErrorMessage>
                                                                            )}
                                                                             <Input type='password' placeholder='password...' value={Loginpassword}
                                                                              onChange={(e) => setLoginpassword(e.target.value)} />
                                                                            {!passwordError ? (
                                                                              <FormHelperText>
                                                                                Enter an strong password password .
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>password is required.</FormErrorMessage>
                                                                            )}
                                                                            <Button bgColor={"#4b5666"} border={0}  w={"100%"} onClick={()=>HandleSignin()} color={"white"} >{isLoading? <Spinner />:"Sign In"}</Button>
                                                                          </FormControl>

                                                                                                                                            


                                                                    
                                                                  </Stack>
                                                                  <VStack gap={3}>
                                                                  <Heading ><Flex w={"100%"} justifyContent={"center"}>
                                                                    
                                                                    <Text  fontSize={"40px"}>Sign Up</Text> </Flex></Heading>
                                                                    <Stack gap={6} textAlign={"center"}> <Text color={"white"}>Welcome! It's quick and easy to set up an account</Text>
                                                                             <Text>Welcome! It's quick and easy to set up an account</Text>
                                                                            <Button  onClick={()=>{setRegistarion(!Registarion)}} bgColor={"#4b5666"} color={"white"}  >Create An Account</Button>
 
                                                                  </Stack></VStack>
                                                                </>):(<>
        {/* --------------------------------------------------------- small Screnn Registration form ---------------------------------------------------- */}
                                                                  <Heading ><Flex w={"100%"} justifyContent={"center"}>
                                                                    <Text  fontSize={"40px"}>Sign Up</Text> </Flex></Heading>
                                                                  <Stack textAlign={"center"}> 
                                                                  <FormControl isInvalid={( SignininEmailError,SignininfirstnameError,SignininpasswordError)}>
                                                                            
                                                                            <Input type='email' placeholder='Email...' value={SignininEmail} onChange={(e) => setsigninEmail(e.target.value)} />
                                                                            {!SignininEmailError ? (
                                                                              <FormHelperText>
                                                                                Enter the email you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>Email is required.</FormErrorMessage>
                                                                            )}
                                                                             <Input type='text' placeholder='Firstname' value={Signininfirstname} onChange={(e) => setsigninfirstname(e.target.value)} />
                                                                            {!SignininfirstnameError ? (
                                                                              <FormHelperText>
                                                                                Enter the Firstname you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>Firstname is required.</FormErrorMessage>
                                                                            )}
                                                                             <Input type='text' placeholder='lastname' value={Signininlastname} onChange={(e) => setsigninlastname(e.target.value)} />
                                                                            {!SignininlastnameError ? (
                                                                              <FormHelperText>
                                                                                Enter the lastname you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>lastname is required.</FormErrorMessage>
                                                                            )}
                                                                              
                                                                             <Input type='password' placeholder='password...' value={Signininpassword}
                                                                              onChange={(e) => setSigninpassword(e.target.value)} />
                                                                              <Flex flexDirection="column" width="100%" my="1em">
                                                                                              <Flex width="100%" justify="space-between">
                                                                                                <Text fontSize="xs">Password strength</Text>
                                                                                                <Text fontSize="xs" as="b">
                                                                                                  {strengthCount}
                                                                                                </Text>
                                                                                              </Flex>
                                                                                              <Progress
                                                                                                width="100%"
                                                                                                value={strengthCount}
                                                                                                size="sm"
                                                                                                colorScheme={(strengthCount >= 0 && strengthCount < 30)? "red":(strengthCount >= 30 && strengthCount <= 70)? "yellow": (strengthCount > 70 && strengthCount <= 100)? "green": null
                                                                                                }
                                                                                              />
                                                                                            </Flex>
                                                                            {!SignininpasswordError ? (
                                                                              <FormHelperText>
                                                                                Enter the password you'd like to receive the newsletter on.
                                                                              </FormHelperText>
                                                                            ) : (
                                                                              <FormErrorMessage>password is required.</FormErrorMessage>
                                                                            )}
                                                                            <Button bgColor={"#4b5666"} border={0} w={"100%"} onClick={()=>HandleLogin()} color={"white"} >{isLoading? <Spinner />:"Sign UP"}</Button>
                                                                          </FormControl>

                                                                  </Stack>
            
                                                                   <Text _hover={{cursor: "pointer"}} onClick={()=>{setRegistarion(!Registarion)}}>Already have an  an account</Text>
                                                                </>)}
                                                              
                                                            </ModalBody>

                                                            <ModalFooter>
                                                                {/* <Button  mr={3} onClick={()=>{setFlag(!flage)
                                                                    onClose()}}>
                                                                Close
                                                                </Button> */}
                                                                
                                                            </ModalFooter>
                                                            </ModalContent>
                                                        </Modal>}
                                                    </DrawerHeader>
                                                    <DrawerBody>
                                                        <VStack>
                          {/* ---------------------------------------------------------------------------------- small screnn menu itemes----------------------------------------------- */}
                                                    { user&&user.role=="admin" && <Box onClick={()=>navigate("/admin/products/furniture")} 
                                                    borderBottom={"1px solid black"} w={"100%"} h={16} >
                                                                          
                                                                          <Text fontSize={"2xl"} >Admin Page</Text>
                                                                                  </Box>}
                                                                                  { user &&(user.role=="admin"||user.role=="user" ) &&  <Button onClick={Logout}>Sign Out</Button> }                      
                                                        
                                                          <Box onClick={()=>navigate("/dress")} borderBottom={"1px solid black"} w={"100%"} h={16} >
                                                                          
                                                              <Text fontSize={"2xl"} >New!</Text>
                                                                      </Box>
                                                        <Box onClick={()=>navigate("/dress")} borderBottom={"1px solid black"} w={"100%"} h={16}  >
                                                          <Text fontSize={"2xl"} >Dresses</Text>
                                                                      </Box>
                                                        <Box onClick={()=>navigate("/dress")} borderBottom={"1px solid black"} w={"100%"} h={16}  >
                                                          <Text fontSize={"2xl"}  >Clothing</Text>
                                                                      </Box>
                                                        <Box onClick={()=>navigate("/dress")} borderBottom={"1px solid black"} w={"100%"} h={16}  >
                                                          <Text fontSize={"2xl"}  >Shoes</Text>
                                                                      </Box>
                                                        <Box  borderBottom={"1px solid black"} w={"100%"} h={16}  >
                                                          <Text fontSize={"2xl"}  >Accessories</Text>
                                                                      </Box>
                                                        <Box onClick={()=>navigate("/dress")} borderBottom={"1px solid black"} w={"100%"} h={16}  >
                                                          <Text fontSize={"2xl"} >Weddings</Text>
                                                                      </Box>
                                                        <Box  borderBottom={"1px solid black"} w={"100%"} h={16} >
                                                          <Text fontSize={"2xl"}  >Home & Furniture</Text>
                                                                      </Box>
                                                        <Box  borderBottom={"1px solid black"} w={"100%"} h={16}  >
                                                          <Text fontSize={"2xl"}  >Beauty & Wellness</Text>
                                                                      </Box>
                                                        <Box  borderBottom={"1px solid black"} w={"100%"} h={16}  >
                                                          <Text fontSize={"2xl"} >Garden & Outdoor</Text>
                                                                      </Box>
                                                        <Box onClick={()=>navigate("/dress")} borderBottom={"1px solid black"} w={"100%"} h={16}  > 
                                                         <Text fontSize={"2xl"}>Gifts</Text>
                                                        </Box>
                                                        </VStack>
                                                    </DrawerBody>    
                                                  </DrawerContent>
                                                </Drawer>
                                          
                                        </Flex>
                                        </Flex>
                                            <Flex h={16} display={{base: 'none', sm: 'none', md: 'none',lg:'flex'}} 
                                            alignItems={'center'} justifyContent={'space-between'}
                                            borderBottom={".5px solid RGBA(0, 0, 0, 0.24)"}>
                                            <Box>
     {/* -----------------------------------------------------------------------------Navbar Mega menu */}
                                             <MegaMenu/>
                                            </Box>
                                            <Flex alignItems={'center'}>  
                                            </Flex>
                                            </Flex>  
                                       </Box>
   
  );
};

export default Navbar;
