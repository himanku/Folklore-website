
import React, { useEffect, useState } from 'react';



import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { Badge, Box, Button, Flex, Icon, Image, Text, Tooltip, VStack } from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import axios from 'axios';






  
 

  function HighlitedDress () {
   
    const navigate=useNavigate()
    const [Dress,setDress]=useState([])

  
    useEffect(()=>{
      async function fetchData() {
         let res= await axios.get(`https://vast-puce-mussel-tie.cyclic.app/dress?page=1&limit=8`)
       //  console.log(res.data)
        setDress(res.data.dress)
      }
      fetchData();
    
       
    },[])
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
                Dress.map((item)=>{
                   return( 
                    <SwiperSlide backgroundcolor={"white"}  key={item._id} > 
                    <VStack height={"750px"} backgroundColor={"white"}   >
                     <Image
                            onClick={()=>navigate("dress")}
                            height={"60%"}
                            src={`${item.img1}`}
                            alt={`Picture of ${item.minRentAmount}`}
                            
                            />
                           
                            <VStack backgroundColor={"white"}>
                             
                              <h3>{item.name}</h3>
                              
                             
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
export default HighlitedDress;