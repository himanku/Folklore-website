import { Button, FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'

const CheckoutPage = () => {

    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [country,setCountry]=useState("")
    const [addressone,setaddressone]=useState("")
    const [addresstwo,setaddresstwo]=useState("")
    const [city,setCity]=useState("")
    const [pinCode,setPinCode]=useState("")
    const [moblieNo,setMobileNo]=useState("")
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
        localStorage.setItem("ShipingDetail",JSON.stringify(payload));
    }
  return (
    <div>
        <Heading>Shiping Details</Heading>
        <FormControl isRequired>
            <FormLabel>Select Country</FormLabel>
            <Select value={country} onChange={(e)=>setCountry(e.target.value)} placeholder='Select country'>
                <option value="india">India</option>
                <option value="USA">USA</option>
                <option value="chaina">Chaina</option>
                <option value="america">America</option>
                <option value="england">England</option>
                <option value="japan">Japan</option>
                <option value="coria">Coria</option>
            </Select>
            <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input value={firstName} placeholder='First name' onChange={(e)=>setFirstName(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input value={lastName} placeholder='Last name' onChange={(e)=>setLastName(e.target.value)}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input value={addressone} placeholder='Address 1' onChange={(e)=>setaddressone(e.target.value)}/>
                <Input value={addresstwo} placeholder='Address 2' onChange={(e)=>setaddresstwo(e.target.value)}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>City</FormLabel>
                <Input value={city} placeholder='City name' onChange={(e)=>setCity(e.target.value)}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Pincode</FormLabel>
                <Input value={pinCode} placeholder='Pincode' type="number" onChange={(e)=>setPinCode(e.target.value)}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Mobile no.</FormLabel>
                <Input value={moblieNo} placeholder='Mobile number' type="number" onChange={(e)=>setMobileNo(e.target.value)}/>
            </FormControl>
            <Button onClick={handelForm}>Submit</Button>
        </FormControl>
    </div>
  )
}

export default CheckoutPage