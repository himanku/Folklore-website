import { Box, Button, FormControl, FormLabel, Grid, Heading, HStack, Image, Input, Select, Text, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
const CheckoutPage = () => {
    let TotalPrice=JSON.parse(localStorage.getItem("totalPrice"))||[]
    const toast = useToast()
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [country,setCountry]=useState("")
    const [addressone,setaddressone]=useState("")
    const [addresstwo,setaddresstwo]=useState("")
    const [city,setCity]=useState("")
    const [pinCode,setPinCode]=useState("")
    const [moblieNo,setMobileNo]=useState("")
    const navigate=useNavigate();
    // let Payl={
    //     country:"",
    //     firstName:"",
    //     lastName:"",
    //     addressone:"",
    //     addresstwo:"",
    //     city:"",
    //     pinCode:"",
    //     moblieNo:""
    // }
    const handelForm=()=>{
        const payload={
            country,
            firstName,
            lastName,
            addressone,
            addresstwo,
            city,
            pinCode,
            moblieNo
        }
        if(country==""|| firstName=="" || lastName=="" || addressone=="" || addresstwo=="" || city=="" || pinCode=="" || moblieNo==""){
            
            toast({
                title: 'Please fill all fields',
                // description: "We've created your account for you.",
                status: 'warning',
                position:"top",
                duration: 5000,
                isClosable: true,
              })
        }else{
            localStorage.setItem("ShipingDetail",JSON.stringify(payload));

            setFirstName("")
            setLastName("")
            setCountry("")
            setaddressone("")
            setaddresstwo("")
            setCity("")
            setPinCode("")
            setMobileNo("")
            toast({
                title: 'Your details has been submitted',
                // description: "We've created your account for you.",
                status: 'success',
                position:"top",
                duration: 5000,
                isClosable: true,
              })
              navigate("/paymentpage")
        }
        
    }
    

  return (
    <div>
      <Navbar/>
        <Heading mt="20px" mb="20px" ml="100px">Shiping Details</Heading>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        <FormControl mb="30px" width="650px" border='1px'  isRequired ml="100px">
            <FormLabel mt="20px"  ml="20px">Select Country</FormLabel>
            <Select border="1px" ml="20px" width="600px" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder='Select country'>
                <option value="india">India</option>
                <option value="USA">USA</option>
                <option value="chaina">Chaina</option>
                <option value="america">America</option>
                <option value="england">England</option>
                <option value="japan">Japan</option>
                <option value="coria">Coria</option>
            </Select>
            <FormControl ml="20px" width="600px" isRequired>
                <FormLabel>First name</FormLabel>
                <Input border="1px" value={firstName} placeholder='First name' onChange={(e)=>setFirstName(e.target.value)} />
            </FormControl>
            <FormControl ml="20px" width="600px" isRequired>
                <FormLabel>Last name</FormLabel>
                <Input border="1px" value={lastName} placeholder='Last name' onChange={(e)=>setLastName(e.target.value)}/>
            </FormControl>
            <FormControl ml="20px" width="600px" isRequired>
                <FormLabel>Address</FormLabel>
                <Input border="1px" value={addressone} placeholder='Address 1' onChange={(e)=>setaddressone(e.target.value)}/>
                <Input border="1px" value={addresstwo} placeholder='Address 2' onChange={(e)=>setaddresstwo(e.target.value)}/>
            </FormControl>
            <FormControl ml="20px" width="600px" isRequired>
                <FormLabel>City</FormLabel>
                <Input border="1px" value={city} placeholder='City name' onChange={(e)=>setCity(e.target.value)}/>
            </FormControl>
            <FormControl ml="20px" width="600px" isRequired>
                <FormLabel>Pincode</FormLabel>
                <Input border="1px" value={pinCode} placeholder='Pincode' type="number" onChange={(e)=>setPinCode(e.target.value)}/>
            </FormControl>
            <FormControl ml="20px" width="600px" isRequired>
                <FormLabel>Mobile no.</FormLabel>
                <Input border="1px" value={moblieNo} placeholder='Mobile number' type="number" onChange={(e)=>setMobileNo(e.target.value)}/>
            </FormControl>
            <Button mb="30px" border="1px" ml="20px"   _hover={{ backgroundColor: "#CA6F1E", color: "white" }} width="600px" mt="20px" onClick={handelForm}>Submit</Button>
        </FormControl>
        <VStack  w="80%" my="10px"  mx="10px">
        <Box
               mt="-10px"

              h="300px"
              pb="20px"
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              w="100%"
            >
              {/*  pincode added and shiping section */}
              <Box
                bgColor={"#566573"}
                w="100%"
                h="40px"
                mb={"10px"}
                display="flex"
                px="7px"
                justifyContent="space-between"
              >
                <Text
                  color="white"
                  alignItems={"center"}
                  textAlign="left"
                  pt="5px"
                >
                  Payment Summary
                </Text>
                {/* <Image
                  filter={"invert(100%)"}
                  w="20px"
                  src="https://www.industrybuying.com/static/desktop-payment/assets/svg/rupee-circle-icon.svg"
                /> */}
              </Box>
              
              
              <Text
                pl="20px"
                fontSize={"13px"}
                color="#de2511"
                py="3px"
                textAlign={"left"}
              >
                {/* {error} */}
              </Text>
              
                <VStack>
                  <Box
                    display={"flex"}
                    h="30px"
                    justifyContent="space-between"
                    w="90%"
                    margin="auto"
                    py="20px"
                  >
                    <Text>Subtotal:</Text>
                    <Text>₹{TotalPrice.total}</Text>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent="space-between"
                    h="30px"
                    w="90%"
                    margin="auto"
                    py="20px"
                  >
                    <Text>Shipping Charges</Text>
                    <Text color="#3da73a">FREE</Text>
                  </Box>
                  <Box
                    fontWeight={"bold"}
                    display={"flex"}
                    h="30px"
                    justifyContent="space-between"
                    w="90%"
                    margin="auto"
                    py="20px"
                    fontSize={"20px"}
                  >
                    <Text>Total Price: </Text>
                    <Text>₹{TotalPrice.total}</Text>
                  </Box>
                  <HStack
                    w="100%"
                    px="10px"
                    mt="10px"
                    borderTop={"0.5px solid RGBA(0, 0, 0, 0.36)"}
                  >
                    <Image
                      w="30px"
                      h="30px"
                      src="https://www.industrybuying.com/static/desktop-payment/assets/svg/delivery-truck.svg"
                      alt="Free Shipping"
                    />
                    <Text color={"grey"} fontSize="12px">
                      Shipping charges applicable as per your pincode 
                    </Text>
                  </HStack>
                </VStack>
              
            </Box>
            </VStack>
            </Grid>
            <Footer/>
    </div>
  )
}

export default CheckoutPage