
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






  
 

  function HighlitExplore () {
   
    const navigate=useNavigate()

  
   const CompleteData=[{
  
    Name:"Good Jeans: The Denim Fit Guide",

    des:"Introducing the perfect pairs for every wear. From rise to size, here's how to find your new favorite jeans.",
    img:"https://images.ctfassets.net/5de70he6op10/1Th4OWf9mWwZ5CZ8SQVxvp/eb5e76d1b3573ce5929ec9d44c6ef5bd/MTE_1.jpg?w=856&q=80&fm=webp"}
   ,{
   
    Name:"2023 | routine refresh",
  
    des:"From fresh-faced skincare formulas to floral-inflected fragrances to now-trending nails, we have everything you need.",
    img:"https://images.ctfassets.net/5de70he6op10/5WIsO3hQfTDgsRbgTRuL1C/7f94871142c50d9ac7ed25e3afe8be92/469633343-020623_hpg_mte_2.jpg?w=856&q=80&fm=webp"},
   {
     
    Name:"Spring 2023: Pattern + Texture",
    
    des:"Blurring the lines of indoors and out, our Spring 2023 collection fits naturally into the 1953 residence of landscape-architect James Rose",
    img:"https://images.ctfassets.net/5de70he6op10/6i8iGrDlh9MWYQ5Za3Ifb8/b3bb93892619d7317eaffc08861f5b60/473929355-mte_3.jpg?w=856&q=80&fm=webp"}
  
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
        } 
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
                               
                              <h3>{item.Name}</h3>
                              <Text fontSize={16}>{item.des}</Text>
                             
                            </VStack></VStack>

                    </SwiperSlide>
                   
                    )
                })
            }

        
       
    </Swiper>
  </>
  );
};


 

export default HighlitExplore;