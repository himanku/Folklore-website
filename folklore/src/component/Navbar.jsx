import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import {HiLanguage,HiUser} from "react-icons/hi2";
import { BsBag ,BsSearch} from "react-icons/bs";
import logo from '../Assetes/folklore-logo.png'
import MegaMenu from '../pages/MegaMenu';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [flage,setFlag]=useState(false)
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
   


    const [LoginEmail, setLoginEmail] = useState('')
    const EnailError = LoginEmail === ''
    const [Loginpassword, setLoginpassword] = useState('')
    const passwordError = Loginpassword === ''
    
 
  return (
    <>
                                                                       
         <Box bg={useColorModeValue('#fdfdf9', '#fdfdf9')} px={2}>

                                <Flex h={8} alignItems={'end'}  justifyContent={{base: 'center', sm: 'center', md: 'center',lg:'end'}} pr={12} > {/* top part */}
                                <Flex justifyContent={'space-around'} gap={6} alignItems={'center'}  display={{base: 'none', sm: 'none', md: 'none',lg:'flex'}}>
                                <Flex gap={2} alignItems={'center'}  display={{base: 'none', sm: 'none', md: 'none',lg:'flex'}}> 
                                <HiLanguage/> English</Flex>
                                <Flex gap={2} alignItems={'center'}  display={{base: 'none', sm: 'none', md: 'none',lg:'flex'}}> 
                                                            
                                                            
                                                            
                                                             <Popover   >
                                                                <PopoverTrigger >
                                                                  <Button _hover={{backgroundColor:"#fdfdf9"}} backgroundColor={"#fdfdf9"}><HiUser/>Sign in / sign up</Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent zIndex={4} boxShadow="0 0 10px rgba(0, 0, 0, 0.2)" 
                                                                borderRadius="4px" h={"650px"} w={"500px"} mr={"500px"} p={6}>
                                                                  <PopoverArrow />
                                                                  <PopoverCloseButton />
                                                                  <PopoverHeader ><Flex w={"100%"} justifyContent={"center"}>
                                                                    <Text  fontSize={"40px"}>Sign In</Text> </Flex></PopoverHeader>
                                                                  <PopoverBody textAlign={"center"}> <Text>Sign in so you can save items to your wishlists, track your orders, and check out faster!</Text>
                                                                  <FormControl isInvalid={EnailError}>
                                                                            
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
                                                                            <Input type={"submit"} value={"Sign In"}/>
                                                                          </FormControl>


                                                                                                                                            


                                                                    
                                                                  </PopoverBody>
                                                                  <PopoverHeader ><Flex w={"100%"} justifyContent={"center"}>
                                                                    <Text  fontSize={"40px"}>Sign Up</Text> </Flex></PopoverHeader>
                                                                    <PopoverBody textAlign={"center"}> <Text>Welcome! It's quick and easy to set up an account</Text>
                                                                 
                                                                            <Input type={"submit"} value={"Create An Account"}/>
                                                                       


                                                                                                                                            


                                                                    
                                                                  </PopoverBody>
                                                                </PopoverContent>
                                                              </Popover> 
                                  </Flex>
                                </Flex>
                                                   <Box display={{base: 'flex', sm: 'flex', md: 'none',lg:'none'}}  h={"100%"}><Img src={logo} h={"100%"}/></Box>
                                </Flex>

                                                                        {/* middile part */}
                                        <Flex h={16} alignItems={'center'}  justifyContent={'space-between'} pr={{base: 0, sm: 0, md:8,lg:8}} pl={{base: 2, sm: 2, md:8,lg:8}} borderBottom={".5px solid gray"}>
                                        <Box display={{base: 'none', sm: 'none', md: 'flex',lg:'flex'}}  h={"100%"}><Img src={logo} h={"80%"}/></Box>

                                        <Flex w={{base:"90%" ,sm:"90%",md:"30%"}} alignItems={'center'} justifyContent={{base:"space-around",sm:"space-around"}}  >
                                            <Flex border={"1px solid gray"} borderRadius={10} w={{base:"100%" ,sm:"100%"}} p={1}> <Input w={{base:"80%" ,sm:"80%"}} border={0}/><Button backgroundColor={"#fdfdf9"}><BsSearch/></Button></Flex>
                                            <Button backgroundColor={"#fdfdf9"}><BsBag/></Button>
                                            <Button display={{base: 'flex', sm: 'flex', md: 'flex',lg:'none'}} backgroundColor={"#fdfdf9"} h={"50px"} w={"50px"}
                                            onClick={() => handleClick("md")}
                                            
                                            > <GiHamburgerMenu /> </Button>
                                              <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
                                                    <DrawerOverlay />
                                                    <DrawerContent>
                                                    <DrawerCloseButton />
                                                    <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
                                                    <DrawerBody>
                                                        <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                        Consequat nisl vel pretium lectus quam id. Semper quis lectus
                                                        nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                                                        quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                                                        magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                                                        Lectus vestibulum mattis ullamcorper velit.
                                                        </p>
                                                    </DrawerBody>
                                                    <Box tabIndex={-1} aria-label='Focus moved to this box'>
                                                            Some other content that'll receive focus on close.
                                                        </Box>

                                                        <Button  onClick={()=>{setFlag(!flage)}}>
                                                            Open Modal
                                                        </Button>
                                                      { flage &&<Modal  isOpen={onClose} onClose={isOpen} size={"full"}>
                                                            <ModalOverlay />
                                                            <ModalContent>
                                                          
                                                            <ModalCloseButton  onClick={()=>{setFlag(!flage)
                                                                    onClose()}} />
                                                            <ModalBody>
                                                              
                                                            </ModalBody>

                                                            <ModalFooter>
                                                                <Button  mr={3} onClick={()=>{setFlag(!flage)
                                                                    onClose()}}>
                                                                Close
                                                                </Button>
                                                                <Button variant='ghost'>Secondary Action</Button>
                                                            </ModalFooter>
                                                            </ModalContent>
                                                        </Modal>}
                                                    </DrawerContent>
                                                </Drawer>
                                          
                                        </Flex>
                                        </Flex>


                                            <Flex h={16} display={{base: 'none', sm: 'none', md: 'none',lg:'flex'}} alignItems={'center'} justifyContent={'space-between'}
                                            borderBottom={".5px solid gray"}>
                                            <Box>
                                                <MegaMenu/>
                                            </Box>

                                            <Flex alignItems={'center'}>
                                                
                                            </Flex>
                                            </Flex>
        
      </Box>
    </>
  );
};

export default Navbar;