// // import { Box, Button, Grid, Heading, Image, Text } from '@chakra-ui/react';
// // import React, { useEffect, useState } from 'react'
// // import CartData from './CartPage';
// // import style from "./CartPage.module.css"
// // // let s=0;
// // let sbt=0;
// // const SingleCartProduct = ({data,S,HandelTotal}) => {
// //     const {id,img1,img2,img3,img4,name,brand,lowprice,highprice,rating}=data;
// //     const [quntity,setQuantity]=useState(1)
// //     const [productPrice,setProductPrice]=useState(lowprice)
// //     const [subTotal,setSubTotal]=useState(lowprice)
// //     const [cart,setCart]=useState(false)
    
// //     // useEffect(()=>{
// //     //     setSubTotal((prv)=>prv+price)
// //     // },[price])
// //     // console.log(data);
// //     // s+=data.price
// //     // console.log(s);

    
// //     const handelSubtract=(id)=>{
// //         if(id){
// //             setQuantity(prev=>prev-1)
// //             setProductPrice(lowprice*(quntity-1))
// //         }
// //     }

// //     const handelAddition=(id)=>{
// //         if(id){
// //             setQuantity(prev=>prev+1)
// //             setProductPrice(lowprice*(quntity+1))
// //          }
// //     }

// //     const handelDelteProduct=(id)=>{
// //         fetch(`https://fakestoreapi.com/products/${id}`,{
// //             method:"DELETE"
// //         })
// //             .then(res=>res.json())
// //             .then(json=>console.log(json))
// //     }
// //     useEffect(()=>{
// //         setSubTotal(productPrice+S)
// //         HandelTotal(subTotal)
// //     },[productPrice])
// //     // const id=data.id;


// //     // return (
          
// //     //         <div className={style.cart_box}>
// //     //           <div className={style.cart_img}>
                
// //     //             <img className={style.imageone} src={img1} alt="Not-Found" />
                
// //     //             <div className={style.threeImages}>
// //     //                 <img className={style.imagetwo} src={img2} alt="Not-Found" />                
// //     //                 <img className={style.imagethree} src={img3} alt="Not-Found" />                
// //     //                 <img className={style.imagefour} src={img4} alt="Not-Found" />                
// //     //             </div>
                
// //     //           </div>
// //     //           <div>
// //     //           <div className={style.name}><p>{name}</p></div>
// //     //             <button onClick={() => handelAddition(id)}>+</button>
// //     //             <button>{quntity}</button>
// //     //             <button onClick={() => handelSubtract(id)}>-</button>
// //     //           </div>
// //     //           <div>
// //     //             <span>{productPrice}</span>
// //     //             <button onClick={() => handelDelteProduct(id)}>Remove</button>
// //     //           </div>
// //     //         </div>
         
          
          
// //     //   );
    
        
// //   return (
// //     <Grid  templateColumns='repeat(2, 1fr)' className={style.cart_box}>
// //         <Box className={style.cart_img}>
// //             <Image  boxSize='500px' src={img1}/>
// //             <Box className={style.threeImage}>
// //                 <Image boxSize='160px' src={img2}/>
// //                 <Image boxSize='160px' src={img3}/>
// //                 <Image boxSize='160px' src={img4}/>
// //             </Box>
// //         </Box>
// //         <Box >
// //             <Box>
// //                 <Text fontWeight="bold" fontSize='30px'>{name}</Text>
// //                 <Text fontWeight="bold" fontSize='20px'>Price :- ${productPrice}</Text>
// //             </Box>
// //             <Box className={style.quantityDiv}>
// //                 {
// //                     quntity>1 ? <Button className={style.subtractButton} onClick={()=>handelSubtract(id)}>-</Button> : <button className={style.subtractButton} disabled onClick={()=>handelSubtract(id)}>-</button>
// //                 }
// //                 <Text className={style.quntity}>{quntity}</Text>
// //                 <Button className={style.plusButton} onClick={()=>handelAddition(id)}>+</Button>
// //             </Box>
// //             <Box>
// //                 <Button onClick={()=>handelDelteProduct(id)}>REMOVE</Button>
// //             </Box>
// //         </Box>
// //     </Grid>
// //   )

// //         }
// // export default SingleCartProduct;
// // // export {sbt}
// // {/* <div className="total">
// //             <span>Total Price of your Cart</span>
// //             <span>Rs - {price}</span>
// //           </div> */}



// import { Navigate, NavLink, useNavigate } from "react-router-dom";
// import { ArrowLeftIcon } from "@chakra-ui/icons";
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   VStack,
//   Divider,
//   Image,
//   Text,
//   Button,
//   Input,
//   HStack,
//   Link,
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalCloseButton,
//   ModalOverlay,
//   useDisclosure,
//   ModalHeader,
//   Collapse,
//   Badge,
//   Flex,
//   useToast,
// } from "@chakra-ui/react";
// import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
// import axios from "axios";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// const SingleCartProduct = () => {
//   const [Cart_Data, set_Cart_Data] = useState([]);
//   const [pin, setPin] = useState("");
//   const toast = useToast();
//   const [error, setError] = useState("");
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [total, settotal] = useState(0);
//   const [coupon, setcoupon] = useState("");
//   const [couponCount, setcouponCount] = useState(0);
//   const navigate = useNavigate();

//   // colapse function for price details
//   const Get_All_Cart_Data = async () => {
//     // console.log("data")
//     let res = await axios
//       .get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products/cart`)
//       .then((res) => {
//         set_Cart_Data(res.data);
//         console.log(res);
//       });
//   };
//   useEffect(() => {
//     Get_All_Cart_Data();
//   }, []);

//   const handleTotal = () => {
//     let Total = 0;
//     Cart_Data.map((ele) => {
//       let addgst = (ele.price / 100) * 18;
//       let singleprice = addgst + ele.price;
//       Total += Math.floor(singleprice * ele.quantity);
//     });
//     settotal(Total);
//   };
//   useEffect(() => {
//     handleTotal();
//   }, [Cart_Data]);

//   const handleDecrease = (item) => {
//     const token = JSON.parse(localStorage.getItem("token")) || "";
//     const GSTIN = JSON.parse(localStorage.getItem("GSTIN")) || "";
//     if (item.quantity > 1) {
//       let newdata = Cart_Data.map((ele) => {
//         if (ele._id === item._id) {
//           return { ...ele, quantity: ele.quantity - 1 };
//         } else return ele;
//       });
//       axios
//       .patch(
//         `https://doubtful-wasp-cowboy-boots.cyclic.app/products/quantity/${item.id}`,
//         item,
//         {
//           headers: {
//             Authorization: "Bearer" + " " + token,
//             GSTIN: GSTIN,
//           },
//         }
//       )
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//       set_Cart_Data(newdata);
//     } else {
//       toast({
//         title: "Quantity",
//         description: "Minimum Quantity Is 1.",
//         status: "error",
//         duration: 2000,
//         isClosable: true,
//       });
//     }
//   };
//   const handleIncrease = (item) => {
//     const token = JSON.parse(localStorage.getItem("token")) || "";
//     const GSTIN = JSON.parse(localStorage.getItem("GSTIN")) || "";
//     if (item.quantity < 5) {
//       let newdata = Cart_Data.map((ele) => {
//         if (ele._id === item._id) {
//           return { ...ele, quantity: ele.quantity + 1 };
//         } else {
//           return ele;
//         }
//       });
//       axios
//         .patch(
//           `https://doubtful-wasp-cowboy-boots.cyclic.app/products/quantity/${item.id}`,
//           item,
//           {
//             headers: {
//               Authorization: "Bearer" + " " + token,
//               GSTIN: GSTIN,
//             },
//           }
//         )
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//       set_Cart_Data(newdata);
//     } else {
//       toast({
//         title: "Quantity",
//         description: "Maximum Quantity Is 5 .",
//         status: "error",
//         duration: 2000,
//         isClosable: true,
//       });
//     }
//   };
//   const findDelivery = () => {
//     let length = pin.length;
//     if (length === 6) {
//       setError("");
//     } else if (length < 6) {
//       setError("Please enter valid 6-digit pincode.");
//     }
//   };
//   const handleRemove = (item) => {
//     const token = JSON.parse(localStorage.getItem("token")) || "";
//     const GSTIN = JSON.parse(localStorage.getItem("GSTIN")) || "";
//     const removedata = Cart_Data.filter((ele) => ele._id !== item._id);
//     set_Cart_Data(removedata);
//     axios
//       .delete(
//         `https://doubtful-wasp-cowboy-boots.cyclic.app/products/delete/${item.id}`,
//         {
//           headers: {
//             Authorization: "Bearer" + " " + token,
//             GSTIN: GSTIN,
//           },
//         }
//       )
//       .then((res) => {
//         toast({
//           title: "Remove Data",
//           description: "Remove Succesfully",
//           status: "success",
//           position: "top",
//           duration: 2000,
//           isClosable: true,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
//   const handleRedirected = () => {
//     navigate("/cart/checkout");
//   };
//   const handleDiscount = () => {
//     if (couponCount == 1) {
//       toast({
//         title: "Offers",
//         description: "Coupon Already Applied.",
//         status: "error",
//         duration: 2000,
//         isClosable: true,
//       });
//     } else if (
//       (coupon == "DUBAM300" && couponCount == 0) ||
//       (coupon == "APP300" && couponCount == 0)
//     ) {
//       setcouponCount(1);
//       settotal((tota) => tota - 300);
//       toast({
//         title: "Offers",
//         description: "Coupon Added Succesfully.",
//         status: "success",
//         duration: 2000,
//         isClosable: true,
//       });
//     } else {
//       toast({
//         title: "Quantity",
//         description: "Enter Valid Coupon.",
//         status: "error",
//         duration: 2000,
//         isClosable: true,
//       });
//     }
//   };
//   return (
//     <>

//     {/* <Navbar/> */}

//       <Box mt="90px">
//         <Box
//           display="flex"
//           w="67%"
//           h="50px"
//           alignItems={"center"}
//           borderBottom={"0.5px solid RGBA(0, 0, 0, 0.08)"}
//           borderTop="0.5px solid RGBA(0, 0, 0, 0.08)"
//           ml="10px"
//           mt="70px"
//         >
//           {/* cart page startting from here */}
//           <Text fontWeight={"semibold"} fontSize={"20px"}>
//             My Cart
//           </Text>
//           <Text w="70px">({Cart_Data.length}items)</Text>
//         </Box>

//         <Box display="flex" mb="30px">
//           <Box w="70%">
//             <Box
//               style={{ height: "500px", overflowY: "scroll" }}
//               w="98%"
//               m="10px"
//             >
//               <Box
//                 justifyContent="space-between"
//                 display="flex"
//                 w="100%"
//                 px="50px"
//                 py="10px"
//                 bgColor="#F5F5F5"
//                 m="auto"
//               >
//                 <Text>Item</Text>
//                 <Text>Quantity</Text>
//                 <Text>Price (Inclusive of GST)</Text>
//               </Box>
//               {/*  mapping all the cart data */}
//               {Cart_Data.map((item, index) => (
//                 <div key={item.id}>
//                   <SingleItem
//                     key={item._id}
//                     item={item}
//                     handleDecrease={handleDecrease}
//                     handleIncrease={handleIncrease}
//                     handleRemove={handleRemove}
//                   />
//                   <Divider />
//                 </div>
//               ))}
//             </Box>
//             <Box
//               w="98%"
//               alignItems={"center"}
//               h="70px"
//               display="flex"
//               m="auto"
//               boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
//               justifyContent={"space-between"}
//               px="20px"
//             >
//               <Button
//                 h="46px"
//                 borderRadius={0}
//                 bgColor={"white"}
//                 boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
//                 onClick={() => navigate("/")}
//               >
//                 + CONTINUE SHOPPING
//               </Button>
//               <Button
//                 h="45px"
//                 _hover={{ backgroundColor: "#fb8339", color: "grey" }}
//                 color="white"
//                 borderRadius={0}
//                 px="30px"
//                 bgColor="#fb8339"
//                 onClick={handleRedirected}
//               >
//                 PLACE ORDER
//               </Button>
//             </Box>
//           </Box>
//           <VStack w="30%" my="10px" mx="10px">
//             <Box
//               h="auto"
//               pb="20px"
//               style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
//               w="100%"
//             >
//               {/*  pincode added and shiping section */}
//               <Box
//                 bgColor={"#4d4d4d"}
//                 w="100%"
//                 h="40px"
//                 mb={"10px"}
//                 display="flex"
//                 px="7px"
//                 justifyContent="space-between"
//               >
//                 <Text
//                   color="white"
//                   alignItems={"center"}
//                   textAlign="left"
//                   pt="5px"
//                 >
//                   Payment Summary
//                 </Text>
//                 <Image
//                   filter={"invert(100%)"}
//                   w="20px"
//                   src="https://www.industrybuying.com/static/desktop-payment/assets/svg/rupee-circle-icon.svg"
//                 />
//               </Box>
//               <Text
//                 color="RGBA(0, 0, 0, 0.48)"
//                 pl="20px"
//                 pb="10px"
//                 textAlign={"left"}
//               >
//                 Estimate shipping charges
//               </Text>
//               <HStack px="20px" w="100%">
//                 <Input
//                   fontSize={"12px"}
//                   w="100%"
//                   placeholder="ENTER YOUR PINCODE"
//                   _hover={{ border: "none" }}
//                   value={pin}
//                   onChange={(e) => setPin(e.target.value)}
//                 />
//                 <Button
//                   position={"relative"}
//                   left="-77px"
//                   verticalAlign="middle"
//                   zIndex="10"
//                   onClick={findDelivery}
//                 >
//                   CHECK
//                 </Button>
//               </HStack>
//               <Text
//                 pl="20px"
//                 fontSize={"13px"}
//                 color="#de2511"
//                 py="3px"
//                 textAlign={"left"}
//               >
//                 {error}
//               </Text>
//               {!error ? (
//                 <VStack>
//                   <Box
//                     display={"flex"}
//                     h="30px"
//                     justifyContent="space-between"
//                     w="90%"
//                     margin="auto"
//                     py="20px"
//                   >
//                     <Text>Subtotal:Rs.</Text>
//                     <Text>{total.toLocaleString()}</Text>
//                   </Box>
//                   <Box
//                     display={"flex"}
//                     justifyContent="space-between"
//                     h="30px"
//                     w="90%"
//                     margin="auto"
//                     py="20px"
//                   >
//                     <Text>Shipping Charges</Text>
//                     <Text color="#3da73a">FREE</Text>
//                   </Box>
//                   <Box
//                     fontWeight={"bold"}
//                     display={"flex"}
//                     h="30px"
//                     justifyContent="space-between"
//                     w="90%"
//                     margin="auto"
//                     py="20px"
//                     fontSize={"20px"}
//                   >
//                     <Text>Total Price</Text>
//                     <Text color="#e45301">{total.toLocaleString()}</Text>
//                   </Box>
//                   <HStack
//                     w="100%"
//                     px="10px"
//                     mt="10px"
//                     borderTop={"0.5px solid RGBA(0, 0, 0, 0.36)"}
//                   >
//                     <Image
//                       w="30px"
//                       h="30px"
//                       src="https://www.industrybuying.com/static/desktop-payment/assets/svg/delivery-truck.svg"
//                       alt="Free Shipping"
//                     />
//                     <Text color={"grey"} fontSize="12px">
//                       Shipping charges applicable as per your pincode {pin}
//                     </Text>
//                   </HStack>
//                 </VStack>
//               ) : null}
//             </Box>
//             {/* Partner offer section */}
//             <Box
//               h="auto"
//               pb="20px"
//               style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
//               w="100%"
//             >
//               <Box
//                 bgColor={"#4d4d4d"}
//                 w="100%"
//                 h="40px"
//                 mb={"10px"}
//                 display="flex"
//                 px="7px"
//                 justifyContent="space-between"
//               >
//                 <Text
//                   color="white"
//                   alignItems={"center"}
//                   textAlign="left"
//                   pt="5px"
//                 >
//                   Partner Offers
//                 </Text>
//                 <Image
//                   filter={"invert(100%)"}
//                   w="20px"
//                   src="https://www.industrybuying.com/static/desktop-payment/assets/svg/discount-icon.svg"
//                 />
//               </Box>
//               <VStack
//                 textAlign={"left"}
//                 lineHeight="20px"
//                 align="flex-start"
//                 borderRadius={"7px"}
//                 px="20px"
//                 h="80px"
//                 bgColor={"#fffaef"}
//                 border="1px dashed #e3daad"
//                 w="90%"
//                 m="auto"
//               >
//                 <Text fontWeight={"semibold"}>
//                   Get GST invoice and save up to 28% on Business Purchases.
//                 </Text>
//                 <Link
//                   onClick={onOpen}
//                   color={"#046699"}
//                   textDecoration="underline"
//                 >
//                   View More
//                 </Link>
//                 <OverlayModel
//                   isOpen={isOpen}
//                   onOpen={onOpen}
//                   onClose={onClose}
//                 />
//               </VStack>
//             </Box>

//             <Box
//               h="auto"
//               pb="20px"
//               style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
//               w="100%"
//             >
//               <Box
//                 bgColor={"#4d4d4d"}
//                 w="100%"
//                 h="40px"
//                 mb={"10px"}
//                 display="flex"
//                 px="7px"
//                 justifyContent="space-between"
//               >
//                 <Text
//                   color="white"
//                   alignItems={"center"}
//                   textAlign="left"
//                   pt="5px"
//                 >
//                   Offers Available
//                 </Text>
//                 <Image
//                   filter={"invert(100%)"}
//                   w="20px"
//                   src="https://www.industrybuying.com/static/desktop-payment/assets/svg/discount-icon.svg"
//                 />
//               </Box>
//               <HStack px="20px" w="100%">
//                 <Input
//                   fontSize={"12px"}
//                   w="100%"
//                   placeholder="ENTER YOUR PINCODE"
//                   _hover={{ border: "none" }}
//                   value={coupon}
//                   onChange={(e) => setcoupon(e.target.value)}
//                 />
//                 <Link
//                   as={Link}
//                   position={"relative"}
//                   left="-60px"
//                   color="#fb8869"
//                   verticalAlign="middle"
//                   zIndex="20"
//                   onClick={() => handleDiscount()}
//                 >
//                   Apply
//                 </Link>
//               </HStack>
//             </Box>
//             {/* first coupon box */}
//             <Box
//               px="10px"
//               alignItems="flex-start"
//               w="100%"
//               pl="10px"
//               h="100px"
//               fontSize={"14px"}
//               overflowY="scroll"
//               scrollPadding={"10px"}
//               scrollbarColor="white blue"
//             >
//               <Box>
//                 <Box display={"flex"}>
//                   <Badge
//                     bgColor={"#fb8869"}
//                     alignItems="flex-start"
//                     color="white"
//                   >
//                     Avalable
//                   </Badge>
//                 </Box>
//                 <Flex w="100%" justifyContent={"space-between"}>
//                   <Text>DUBAM300</Text>
//                   <Link onClick={() => setcoupon("DUBAM300")} color={"#E53E3E"}>
//                     Apply Now
//                   </Link>
//                 </Flex>
//                 <Flex mt="20px" w="100%" justifyContent={"space-between"}>
//                   <h6>Get Flat Rs. 300 Off.</h6>
//                   {/* <Link>T&C Apply</Link> */}
//                 </Flex>
//               </Box>
//               {/* second coupon box */}
//               <Box>
//                 <Box display={"flex"} pt="30px" pb="4px">
//                   <Badge
//                     bgColor={"#fb8869"}
//                     alignItems="flex-start"
//                     color="white"
//                   >
//                     Avalable
//                   </Badge>
//                 </Box>
//                 <Flex w="100%" justifyContent={"space-between"}>
//                   <Text>APP300</Text>
//                   <Link onClick={() => setcoupon("APP300")} color={"#E53E3E"}>
//                     Apply Now
//                   </Link>
//                 </Flex>
//               </Box>
//               <Flex w="100%" mt="20px" justifyContent={"space-between"}>
//                 <h6>Get Flat Rs. 300 Off.</h6>
//                 <Link>T&C Apply</Link>
//               </Flex>
//             </Box>
//           </VStack>
//         </Box>
//       </Box>
//       {/* <Footer/> */}
//     </>
//   );
// };
// export default SingleCartProduct;

// // export const SingleItem = ({
// //   item,
// //   handleDecrease,
// //   handleIncrease,
// //   handleRemove,
// //   dd,
// // }) => {
// //   const toast = useToast();
// //   const [show, setShow] = React.useState(true);
// //   const totalPrice = (item) => {
// //     let tax = Math.floor(item.price / 100) * 18;
// //     let totaltax = tax * item.quantity;
// //     let total = item.price * item.