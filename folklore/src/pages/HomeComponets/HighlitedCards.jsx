
import React from 'react';



import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Badge, Box, Button, Flex, Icon, Image, Text, Tooltip, VStack } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';






  
 

  function HighlitedCards () {
   
    const navigate=useNavigate()

  
   const CompleteData=[{
    type:"CUSTOMER FAVORITE",
    Name:"The Marais Chiffon Maxi Dress",
    rate:5,
    des:"Love - I have this in three colors. Why? Because you can throw it on, and the fit is seamless, it’s comfy it’s breezy.",
    img:"https://images.ctfassets.net/5de70he6op10/1h9gkbrJB6rfKMEsrQsrlE/75fdaefe631d2d0e38d24b5e5d68ec10/473929238-ls_customerfave_a.jpg?w=630&q=80&fm=webp"}
   ,{
    type:"CUSTOMER FAVORITE",
    Name:"The Super Mini Slouchy Bag",
    rate:5,
    des:"Super cute, perfect little crossbody. Holds your phone, money, lipstick and keys",
    img:"https://images.ctfassets.net/5de70he6op10/2bvup8dYlhV23fJF8JWtBi/f007eb7c84134bfe87c3dd3669ffd06f/473929242-ls_customerfave_b.jpg?w=630&q=80&fm=webp"},
   {
    type:"CUSTOMER FAVORITE",
    Name:"The Bennet Buttondown Shirt",
    rate:5,
    des:"Oversized in the best way...it's a perfect cotton shirt.",
    img:"https://images.ctfassets.net/5de70he6op10/7e6CTKkxyvEGN65qcfAD6e/833ca12cd46657912e24e81a42fc086a/473929246-ls_customerfave_c.jpg?w=630&q=80&fm=webp"}
  
    ,{
      type:"CUSTOMER FAVORITE",
      Name:"The Colette Wide-Leg Pants",
      rate:5,
      des:"I LOVE THESE PANTS! They feel good on, whether I'm . Overall 10/10 would recommend!",
      img:"https://images.ctfassets.net/5de70he6op10/IRIRM5boIBRZTPtM9RGo2/d5a954acdea330f877f48ee00b9dd9e7/473929254-ls_customerfave_d.jpg?w=630&q=80&fm=webp"},
     ]
  return ( 
    <> 
    

    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      w={"100%"}
     
      

      
      pagination={{
        clickable: true,
        
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >

    


            {
                CompleteData.map((item)=>{
                   return( 
                    <SwiperSlide backgroundcolor={"white"}  key={Math.random()*10} > 
                    <VStack height={"750px"} backgroundColor={"white"}   >
                     <Image
                            height={"60%"}
                            src={`${item.img}`}
                            alt={`Picture of ${item.minRentAmount}`}
                            
                            />
                           
                            <VStack backgroundColor={"white"}>
                              <p>{item.type}</p>
                              <h3>{item.Name}</h3>
                              <Text fontSize={12}>{item.des}</Text>
                              <Flex justifyContent="space-between" alignContent="center">
                               <Rating rating={item.rating} numReviews={3} /> 
                               <span className='shop' >shop now</span>
                               <Box fontSize="2xl" >
                               

            </Box>
          </Flex>
                            </VStack></VStack>

                    </SwiperSlide>
                   
                    )
                })
            }

        
       
    </Swiper>
  </>
  );
};


function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        
      </Box>
    </Box>
  );
}
export default HighlitedCards;