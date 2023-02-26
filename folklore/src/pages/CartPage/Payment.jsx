import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Grid, Heading, Input, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Payment = () => {
    const [name,setName]=useState("");
    const toast = useToast()
    const [cardNumber,setCardNumber]=useState("");
    const [cvvNumber,setCvvNumber]=useState("");
    const [success,setSuccess]=useState(false)
    const navigate=useNavigate()
    
    
    const handelPayment=()=>{
        const paymentDetail={
            name,
            cardNumber,
            cvvNumber
        }
        if(name==""|| cardNumber=="" || cvvNumber=="" ){
            
            toast({
                title: 'Please fill all fields',
                // description: "We've created your account for you.",
                status: 'warning',
                position:"top",
                duration: 5000,
                isClosable: true,
              })
              
        }else{
            localStorage.setItem("PaymentDetail",JSON.stringify(paymentDetail))
            setName("")
            setCardNumber("")
            setCvvNumber("")
            setSuccess(true)
            toast({
                title: 'Payment is successfull',
                // description: "We've created your account for you.",
                status: 'success',
                position:"top",
                duration: 5000,
                isClosable: true,
              })
            navigate("/")
        }
        
        
    }

    

  return (
    <Box  border="1px" pl="20px" pr="20px" margin="auto" 
        mt="50px"
        pb={success ? "20px" : null}
        width="500px">
        <Heading mt="20px" mb="30px">Payment Detail</Heading>
        <Box>
            <Input value={name} onChange={(e)=>setName(e.target.value)} mb="30px" placeholder='Enter name'/>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
                <Input  onChange={(e)=>setCardNumber(e.target.value)} value={cardNumber} mb="30px" placeholder='Enter card number'/>
                <Input  onChange={(e)=>setCvvNumber(e.target.value)} value={cvvNumber} mb="30px" placeholder='Cvv'/>
            </Grid>
          <Button
             onClick={handelPayment}
            _hover={{ backgroundColor: "#CA6F1E", color: "white" }}
            mb="50px" width="460px">Payment</Button> 
        </Box>
        {
            success ? <Alert
            status='success'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
          >
            <AlertIcon boxSize='40px' mr={0} />
            <AlertTitle mt={4} mb={1} fontSize='lg'>
              Application submitted!
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
              Thanks for submitting your application. Our team will get back to you soon.
            </AlertDescription>
          </Alert> : null
        }
        
    </Box>
  )
}

export default Payment